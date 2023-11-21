import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';
import { CiRead } from "react-icons/ci";
import { VscThumbsup } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import Main from '../components/section/Main';





const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true)
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Eroor -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (

        <Main
            title="여행 유튜버 채널"
            description="여행 유튜버 채널 페이지 입니다.여행 유튜버의 영상을 모두 확인 할 수 있습니다."
        >
            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (

                    <div className="channel__inner">
                        <div className="channel__header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span className='subscriberCount'><VscThumbsup />{channelDetail.statistics.viewCount}</span>
                                <span className='videoCount'><CiViewList />{channelDetail.statistics.videoCount}</span>
                                <span className='viewCount'><CiRead />{channelDetail.statistics.subscriberCount}</span>
                            </div>
                        </div>


                        <div className="channel__video video__inner search">
                            <VideoSearch videos={channelVideo} layout="channel" />
                        </div>
                        <div className="channel__more">
                            <button onClick={loadMoreVideos}>더보기</button>
                        </div>
                    </div>
                )
                }

            </section >

        </Main>

    )
}

export default Channel