import React from 'react'
import { travelerText } from '../../data/traveler'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';


const Traveler = () => {
    return (
        <section id="travelerPage">
            <h2>🙋‍♀️여행 유튜버 모음</h2>
            <div className="traveler__inner">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={50}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                    }}

                >
                    {travelerText.map((traveler, key) => (
                        <SwiperSlide className="traveler" key={key}>
                            <div className="traveler__img">
                                <Link to={`/channel/${traveler.channelId}`}>
                                    <img src={traveler.img} alt={traveler.author} />
                                </Link>
                            </div>
                            <div className="traveler__info">{traveler.author}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default Traveler