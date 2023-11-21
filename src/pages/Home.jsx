import React from 'react'

import Today from '../components/contents/Today'
import Traveler from '../components/contents/Traveler'
import Main from '../components/section/Main'
const Home = () => {
    return (

        <Main
            title="여행 유튜버"
            description="여행유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Traveler />
        </Main>

    )
}

export default Home