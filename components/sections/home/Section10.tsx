import Link from "next/link";

export default function Section10({ classList }: any) {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className={`team1 sp overflow-hidden ${classList}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Notre Équipe
                                </span>
                                <h2 className="text-anime-style-3">Les experts derrière Atlas Consulting IT</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={700}>
                                    Une équipe passionnée par l’innovation et dédiée à accompagner nos clients 
                                    dans leur transformation digitale et leur sécurité informatique.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">

                        {/* === Anass BENMOUSSA === */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img1.png" alt="Anass BENMOUSSA" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Anass BENMOUSSA</Link>
                                        </h4>
                                        <p>CEO</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* === Azeddin BENHLIMA === */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img2.png" alt="Azeddin BENHLIMA" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Azeddin BENHLIMA</Link>
                                        </h4>
                                        <p>CTO</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* === Abdelmalek EL HOUAOUI === */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={1100}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img3.png" alt="Abdelmalek EL HOUAOUI" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Abdelmalek EL HOUAOUI</Link>
                                        </h4>
                                        <p>Senior Consultant</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
