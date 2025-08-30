import Link from "next/link";

export default function SectionTestimonials() {
    return (
        <>
            {/*===== TESTIMONIAL AREA START =======*/}
            <div className="testimonial-page sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Avis Clients
                                </span>
                                <h2 className="text-anime-style-3">Ce que disent nos partenaires</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={700}>
                                    La satisfaction de nos clients est au cœur de notre mission. Voici quelques retours d’expérience sur nos services.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space30" />
                    <div className="row">
                        {/* Avis 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}><i className="fa-solid fa-star" /></li>
                                        ))}
                                    </ul>
                                    <div className="pera">
                                        <p>
                                            “Grâce à Atlas IT Consulting, nous avons pu former nos ingénieurs aux dernières technologies. Leur approche pratique et pédagogique a fait la différence.”
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img1.png" alt="Avis Client 1" />
                                    </div>
                                    <div className="heading1">
                                        <h4><Link href="#">Sofia El Amrani</Link></h4>
                                        <p>Directrice RH</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avis 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}><i className="fa-solid fa-star" /></li>
                                        ))}
                                    </ul>
                                    <div className="pera">
                                        <p>
                                            “Leur expertise en réseaux et cybersécurité nous a permis de sécuriser nos données sensibles tout en optimisant nos performances.”
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img2.png" alt="Avis Client 2" />
                                    </div>
                                    <div className="heading1">
                                        <h4><Link href="#">Karim Ouhami</Link></h4>
                                        <p>Responsable IT</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avis 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}><i className="fa-solid fa-star" /></li>
                                        ))}
                                    </ul>
                                    <div className="pera">
                                        <p>
                                            “Nous avons intégré des solutions d’Intelligence Artificielle proposées par Atlas IT. Résultat : un gain de temps et une meilleure prise de décision.”
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img3.png" alt="Avis Client 3" />
                                    </div>
                                    <div className="heading1">
                                        <h4><Link href="#">Nadia Bensalem</Link></h4>
                                        <p>CEO StartupTech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== TESTIMONIAL AREA END =======*/}
        </>
    );
}
