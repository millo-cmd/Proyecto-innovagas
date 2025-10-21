import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperComponent.css'

export const SwiperComponent = () => {
    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} // Hace el carrusel infinito
                autoplay={{
                    delay: 5000, // Cambia cada 5 segundos
                    disableOnInteraction: false, // Continúa después de interacción del usuario
                    pauseOnMouseEnter: true, // Pausa cuando el mouse está encima
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]} // Agregamos Autoplay a los módulos
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <img className='img-card' src='/assets/fotosSwiper/innovagass.jpeg' alt="Controlador" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-card' src='/assets/fotosSwiper/instalacion.jpg' alt="Instalación" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-card' src='/assets/fotosSwiper/instalado.jpg' alt="Instalado" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-card' src='/assets/fotosSwiper/metas.jpg' alt="Metas" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}