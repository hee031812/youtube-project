import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/api'
import Today from '../components/contents/Today'
import Traveler from '../components/contents/Traveler'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider';

const Home = () => {
    const [channelVideo1, setChannelVideo1] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);


    useEffect(() => {
        const v1 = "UClRNDVO8093rmRTtLe4GEPw";
        const v2 = "UCd4xMEVIPj6hlKMU9S7bfCA";
        const v3 = "UC45m6W8hWEHheoncfd55nuA";
        const v4 = "UCag-vLxfCjAUNebW9gA0yRg";
        const v5 = "UCwjMQYL9vgbqGzxYW6dVhTw";

        const fetchResults = async () => {
            try {
                const videosData1 = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo1(videosData1.items);
                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);
                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);
                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);
                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log("Error -> ", error);
            }
        }
        fetchResults();
    }, [])



    return (

        <Main
            title="여행 유튜버"
            description="여행유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Traveler />

            <VideoSlider videos={channelVideo1} title='🛫곽튜브 최신영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='🛫원지의 하루 최신영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='🛫웅진고웨이 최신영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='🛫조튜브 최신영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='🛫희철리즘 최신영상' name='v5' />
        </Main>

    )
}

export default Home