import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero9" style={{ backgroundImage: "url(assets/img/bg/hero9-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                {/* <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> L’innovation au service de votre performance
                                </span> */}
                                <h1 className="text-anime-style-3">Expert en Transformation Digitale et Cybersécurité</h1>
                                <div className="space16" />
                               <p className="company-description">
                                  Chez <strong>Atlas Consulting IT</strong>, nous croyons que la technologie 
                                  est un levier de croissance incontournable.
                                  De la <strong>formation des talents</strong> à la mise en place d’infrastructures Réseau et de solutions de 
                                  <strong> cybersécurité</strong>, 
                                 nous accompagnons nos clients avec des solutions fiables et performantes.
                                  En passant par l’intégration de l’<strong> IA</strong>, 
                                  nous aidons les entreprises à relever les défis du numérique et à transformer 
                                  leurs ambitions en résultats concrets.
                                </p>

                                <div className="space30" />
                                <Link className="theme-btn11" href="/service">
                                    Demander un devis &nbsp;
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-images">
                                <div className="image1" data-aos="zoom-out" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero6-img1.png" alt="" />
                                </div>
                                <div className="image2" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero6-img2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
