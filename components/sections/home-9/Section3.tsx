import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about9 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images-all">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image2.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="heading9">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                               À propos d’Atlas Consulting IT
                             </span>
                           <h2 className="text-anime-style-3">
                             Accélérez votre Transformation Digitale,<br /> 
                           </h2>

                          <div className="space16" />

                            <p data-aos="fade-left" data-aos-duration={700} style={{textAlign:"justify"}}>
                             Chez <strong>Atlas Consulting IT</strong>, nous mettons l’innovation au service 
                             de la performance des entreprises. De la <strong>formation des talents</strong> 
                             aux <strong>réseaux & télécoms</strong>, en passant par la 
                             <strong> cybersécurité</strong> et l’<strong>IA</strong>, 
                              nous accompagnons nos clients vers une croissance durable et sécurisée.
                            </p>

                          <div className="space10" />

                          <div className="row" data-aos="fade-left" data-aos-duration={1000}>
                             <div className="col-md-6">
                               <ul className="list">
                                 <li>
                                    <span className="check">
                                    <i className="fa-solid fa-check" />
                                    </span>
                                    Formation des talents
                                  </li>
                                  <li>
                                    <span className="check">
                                      <i className="fa-solid fa-check" />
                                    </span>
                                     Réseaux & Télécoms
                                   </li>
                                </ul>
                            </div>
          

                           <div className="col-md-6">
                             <ul className="list">
                               <li>
                                <span className="check">
                                 <i className="fa-solid fa-check" />
                                </span>
                                 Cybersécurité
                               </li>
                               <li>
                                   <span className="check">
                                    <i className="fa-solid fa-check" />
                                   </span>
                                  Solutions IA
                               </li>
                             </ul>
                          </div>
                        </div>

                  <div className="space30" />

                   <div className="" data-aos="fade-left" data-aos-duration={1200}>
                     <Link className="theme-btn15" href="/service">
                       Demander un devis &nbsp; 
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
