import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about-page-sec1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        {/* ==== Colonne gauche avec images ==== */}
                        <div className="col-lg-6">
                            <div className="about3-images">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img1.png" alt="Atlas IT" />
                                        </div>
                                        <div className="conter-box conter-box1">
                                            <h3>
                                                <span className="counter">2025</span>
                                            </h3>
                                            <p>Année de création</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="conter-box conter-box2">
                                            <h3>
                                                <span className="counter">100</span>%
                                            </h3>
                                            <p>Engagés pour nos clients</p>
                                        </div>
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img2.png" alt="Atlas IT" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==== Colonne droite avec texte ==== */}
                        <div className="col-lg-6">
                            <div className="heading1 about3-heading">
                                <span className="span">À propos de nous</span>
                                <h2>Atlas Consulting IT : Innovation & Sécurité au service des entreprises</h2>
                                <div className="space16" />
                                <p>
                                    Basée au Maroc, <strong>Atlas Consulting IT</strong> est une 
                                    jeune agence digitale spécialisée dans la <strong>transformation numérique</strong>. 
                                    Notre mission est d’accompagner les entreprises locales et internationales 
                                    à relever les défis du digital grâce à des solutions sur mesure et sécurisées.
                                </p>

                                <div className="about3-icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/about3-icon1.png" alt="Formation" />
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Formation & Développement des talents</Link>
                                        </h5>
                                        <p>
                                            Nous aidons cadres, ingénieurs et techniciens à acquérir les 
                                            compétences nécessaires pour réussir dans l’économie numérique.
                                        </p>
                                    </div>
                                </div>

                                <div className="about3-icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/about3-icon2.png" alt="Cybersécurité" />
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Réseaux, Cybersécurité & Intelligence Artificielle</Link>
                                        </h5>
                                        <p>
                                            De l’installation d’infrastructures fiables à la mise en place 
                                            de solutions IA et de cybersécurité, nous protégeons et renforçons 
                                            la performance de nos clients.
                                        </p>
                                    </div>
                                </div>

                                <div className="space30" />
                                <div>
                                    <Link className="theme-btn15" href="/contact">
                                        Nous contacter
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
