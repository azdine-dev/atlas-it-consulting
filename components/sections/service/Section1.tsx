import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 service-page-service sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Nos Services
                                </span>
                                <h2 className="text-anime-style-3">Des Solutions Numériques Innovantes</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={700}>
                                    Atlas IT Consulting accompagne les entreprises marocaines et internationales
                                    dans leur transformation digitale à travers des services adaptés et performants.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        {/* Service 1 - Formation */}
                        <div className="col-lg-3 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img1.png" alt="Formation IT" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon1.png" alt="Formation" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Formation des Talents</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>
                                            Développement des compétences techniques pour cadres, ingénieurs et techniciens afin de relever les défis numériques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 - Réseaux */}
                        <div className="col-lg-3 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img2.png" alt="Réseaux & Télécoms" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon2.png" alt="Réseaux" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Réseaux & Télécoms</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>
                                            Installation et gestion de réseaux, télécoms, VoIP et firewalls pour une infrastructure performante et sécurisée.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 - Cybersécurité */}
                        <div className="col-lg-3 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img3.png" alt="Cybersécurité" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon3.png" alt="Cybersécurité" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Cybersécurité</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>
                                            Protection des systèmes d’information contre les menaces et mise en place de solutions de sécurité avancées.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 - Intelligence Artificielle */}
                        <div className="col-lg-3 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img4.png" alt="Intelligence Artificielle" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon4.png" alt="IA" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Intelligence Artificielle</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>
                                            Développement de solutions IA pour automatiser, analyser et optimiser la performance de votre entreprise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
