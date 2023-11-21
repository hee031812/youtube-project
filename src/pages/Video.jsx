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
    // const [comments, setComments] = useState([]);


    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0]);
            })
    }, [videoId])

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
                        </div>
                    </div>
                )}

            </section>
        </Main>
    )
}

export default Video