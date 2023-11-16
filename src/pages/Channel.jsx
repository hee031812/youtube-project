import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';
import { CiRead } from "react-icons/ci";
import { VscThumbsup } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";





const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    // const [loading, setLoading] = useState(true)
    // const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                // console.log(data)
                setChannelDetail(data.items[0]);
                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                // console.log(videoData);
                setChannelVideo(videoData.items);
            } catch (error) {
                console.log("Error -> ", error);
            }
        }
        fetchResults();
    }, [channelId])
    return (
        <section id='channelPage'>
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
                    </div>
                </div>
            )
            }

        </section >
    )
}

export default Channel