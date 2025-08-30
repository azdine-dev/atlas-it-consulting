import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact9 sp overflow-hidden" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                   Nous Contacter
                                </span>
                                <h2 className="text-anime-style-3">Faites-vous rappeler par notre agence web au Maroc</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact9-content-area">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="form-area">
                                    <h3>Envoyer Nous un message</h3>
                                    <div className="space16" />
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Prénom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="number" placeholder="Teléphone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Service Type" />
                                                </div>
                                            </div> */}
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <textarea rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="button-area">
                                                    <button className="theme-btn15" type="submit">
                                                        Envoyer
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon1.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Location</h5>
                                            <Link href="">
                                               Hay Riad <br /> Rabat
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon2.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Nous Appeler</h5>
                                            <Link href="tel:+212603328567">+212603328567</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon3.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Envoyer Nous un Email</h5>
                                            <Link href="mailto:info@taxvice.com">info@taxvice.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
