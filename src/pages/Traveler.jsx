import React from 'react'

import { travelerText } from '../data/traveler'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Traveler = () => {
    return (
        <Main
            title="여행 유튜버 모음입니다."
            description="여행 유튜버 모음 페이지 입니다."
        >
            <section id="travelerPage">
                <h2>🙋‍♀️여행 유튜버 모음</h2>
                <div className="traveler__inner">
                    {travelerText.map((traveler, key) => (
                        <div className="traveler play__icon" key={key}>
                            <div className="traveler__img">
                                <Link to={`/channel/${traveler.channelId}`}>
                                    <img src={traveler.img} alt={traveler.author} />
                                </Link>
                            </div>
                            <div className="traveler__info">{traveler.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Traveler