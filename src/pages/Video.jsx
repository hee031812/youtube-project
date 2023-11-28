import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { GoHeart } from "react-icons/go";
import { IoMdEye } from "react-icons/io";

import Main from '../components/section/Main';

const Video = () => {

    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [comments, setComments] = useState([]);

    const [showAllComments, setShowAllComments] = useState(false); // State to track whether to show all comments

    const handleViewCommentsClick = () => {
        // Toggle the state to show/hide all comments
        setShowAllComments(!showAllComments);
    };





    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0]);
            })
        // 비디오 comment
        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
            .then((data) => {
                const extractedComments = data.items.map((item) => item.snippet.topLevelComment.snippet.textOriginal);
                setComments(extractedComments);
            });
    }, [videoId]);

    return (
        <Main
            title="여행 유튜버 영상페이지입니다."
            description="여행 유튜버 영상입니다.">
            <section id='videoPage'>
                <h2 className='blind'>비디오</h2>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className="count">
                                    <span className='view'><IoMdEye />조회수:{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><GoHeart />좋아요:{videoDetail.statistics.likeCount}</span>
                                    <span className='commnet'>{videoDetail.statistics.commnetCount}</span>
                                </div>
                            </div>
                            <div className="video__desc">
                                {videoDetail.snippet.description}
                                {videoDetail.snippet.description}
                            </div>
                            <ul className='comments'>
                                <h3>댓글</h3>
                                {showAllComments
                                    ? comments.map((comment, index) => (
                                        <li key={index}>
                                            {comment}
                                        </li>
                                    ))

                                    : comments.slice(0, 5).map((comment, index) => (
                                        <li key={index}>
                                            {comment}
                                        </li>
                                    ))}
                            </ul>

                            {!showAllComments && comments.length > 5 && (
                                <button onClick={handleViewCommentsClick} className='comment__more' >
                                    댓글 더보기
                                </button>
                            )}
                        </div>
                    </div>

                )}

            </section>
        </Main>
    )
}

export default Video