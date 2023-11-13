import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb">
                    today__thumb
                </div>
                <div className="today__text">
                    <span className='today'>오늘의 픽!</span>
                    <h3 className='title'> 공산국가 쿠바에서 다시 만난 3인조 - 쿠바(1)</h3>
                    <p className='desc'>안녕하세요! 여러분, 오늘은 특별한 여행 유튜버 곽튜브를 소개합니다.
                        안녕하세요! 여러분, 오늘은 특별한 여행 유튜버 조튜브를 소개합니다.
                        안녕하세요! 여러분, 오늘은 특별한 여행 유튜버 조튜브를 소개합니다.
                    </p>
                    <div className='info'>
                        <span className='author'>곽튜브</span>
                        <span className='date'>2023.11.13</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home