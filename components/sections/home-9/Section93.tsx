import Link from "next/link";

export default function Section93() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service6 sp overflow-hidden" id="service" style={{ backgroundImage: "url(assets/img/bg/service6-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                     Nos Services chez <strong>Atlas IT Consulting</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image1.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon1.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Formation des Cadres</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image2.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon2.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Formation Des Ingénieurs et Techniciens</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image3.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon3.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Installation Réseau,Telecom</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image4.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon4.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Installation Voip et Firewall</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image5.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon5.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Cybersécurité</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="service-box">
                                <div className="image">
                                    <img src="assets/img/service/service6-image6.png" alt="" />
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/service6-icon6.svg" alt="" />
                                </div>
                                <div className="heading6">
                                    <h5>
                                        <Link href="/service-details">Intelligence Artificielle</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="buttons text-center" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <Link className="theme-btn11" href="/service">
                                    view more services
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
