"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".testimonial-prev-arrow1",
        prevEl: ".testimonial-next-arrow1",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
};

export default function Section8({ classList }: any) {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className={`tes1 sp overflow-hidden ${classList}`}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Témoignages
                                </span>
                                <h2 className="text-anime-style-3">Ils nous font confiance</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Découvrez ce que nos clients disent de <strong>Atlas Consulting IT</strong>. 
                                    De la mise en place d’infrastructures à la cybersécurité en passant par 
                                    la transformation digitale, nous plaçons la réussite de nos partenaires au cœur de notre mission.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tes7-buttons" data-aos="fade-right" data-aos-duration={900}>
                                <button className="testimonial-prev-arrow1">
                                    <i className="fa-regular fa-arrow-left" />
                                </button>
                                <button className="testimonial-next-arrow1">
                                    <i className="fa-regular fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <Swiper {...swiperOptions} className="tes1-slider" data-aos="fade-up" data-aos-duration={900}>
                            
                            {/* === Témoignage 1 === */}
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}><i className="fa-solid fa-star" /></li>
                                            ))}
                                        </ul>
                                        <div className="pera">
                                            <p>“Atlas Consulting IT nous a accompagné dans la sécurisation de notre réseau. 
                                            Leur expertise en cybersécurité nous a permis de travailler sereinement.”</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4><Link href="#">Youssef El Amrani</Link></h4>
                                            <p>Directeur Technique, Entreprise Locale</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img1.png" alt="Client" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* === Témoignage 2 === */}
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}><i className="fa-solid fa-star" /></li>
                                            ))}
                                        </ul>
                                        <div className="pera">
                                            <p>“Grâce à leur formation sur l’IA, notre équipe a gagné en productivité et en efficacité. 
                                            Atlas Consulting IT est un véritable partenaire stratégique.”</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4><Link href="#">Salma B.</Link></h4>
                                            <p>Responsable RH, Startup Tech</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img2.png" alt="Client" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* === Témoignage 3 === */}
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}><i className="fa-solid fa-star" /></li>
                                            ))}
                                        </ul>
                                        <div className="pera">
                                            <p>“Une équipe jeune, dynamique et professionnelle. 
                                            Leur accompagnement dans notre transformation digitale a été décisif.”</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4><Link href="#">Karim L.</Link></h4>
                                            <p>CEO, PME Industrielle</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img1.png" alt="Client" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
