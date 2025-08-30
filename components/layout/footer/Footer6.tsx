import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <div className="footer6 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo">
                                    <Link href="">
                                        <img src="assets/img/logo/logo-atlas-it2.png" alt="" />
                                    </Link>
                                </div>
                                <div className="space20" />
                                <div className="heading1-w">
                                  <p>Nous visons à rendre l’innovation accessible, à lever vos inquiétudes et à vous accompagner vers une transformation digitale réussie.</p>
                                </div>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Liens rapides</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="#">Staff Management</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Leadership Training</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Corporate Program&nbsp;</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Staffing Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Blog Standard</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items pl-5">
                                <h3>Liens Utiles</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/">Home </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">A propos de Nous </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Nos Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Avis Clients</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Nous Contacter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Contacter Nous</h3>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon1.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="tel:+880123456789">+212603328567</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon2.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">Hay Riad, Rabat , Maroc</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon3.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="mailto:staffingagency@com">atlas-it-consulting@gmail.com</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon4.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">atlas-it-consulting.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space70" />
                </div>
                <div className="copyright-area _relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="coppyright">
                                    <p>© Copyright 2025 -Atlas IT Consulting. Tous droits réservés</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== FOOTER AREA END =======*/}
        </>
    );
}
