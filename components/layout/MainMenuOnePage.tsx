import Link from "next/link";

export default function MainMenu() {
    return (
        <div className="main-menu-ex main-menu-ex1">
            <ul id="list-example">
                <li>
                    <Link style={{ fontWeight: "bold" }} className="list-group-item list-group-item-action" href="/about">
                        Qui sommes-nous ?
                    </Link>
                </li>
                <li>
                  <Link  style={{ fontWeight: "bold" }} href="#service" className="main1">
                    No services <i className="fa-solid fa-angle-down" />
                  </Link>
                <ul>
                    <li>
                        <Link  style={{ fontWeight: "normal" }} href="/service">Formation des Cadres,Ingénieurs et Techniciens </Link>
                    </li>
                    
                      <li>
                        <Link  style={{ fontWeight: "normal" }} href="/service">Instalation Réseau, Telecom, Voip et Firewall</Link>
                    </li>
                    <li>
                        <Link   style={{ fontWeight: "normal" }} href="/service">Cyber Sécurité</Link>
                    </li>
                    <li>
                        <Link  style={{ fontWeight: "normal" }} href="/service">AI</Link>
                    </li>
                    
                    {/* <li className="has-dropdown has-dropdown1">
                        <Link href="/service-details" className="main">
                            Service Detials
                            <span>
                                <i className="fa-solid fa-angle-right" />
                            </span>
                        </Link>
                        <Link href="/service-details" className="main">
                            Service Detials
                            <span>
                                <i className="fa-solid fa-angle-right" />
                            </span>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/service-details-left">Formation des Cadres , Ingénieurs et Techniciens</Link>
                            </li>
                            <li>
                                <Link href="/service-details-right">Details Right</Link>
                            </li>
                            <li>
                                <Link href="/service-details">Single Details</Link>
                            </li>
                        </ul>
                    </li> */}
                </ul>
                {/* <Link className="list-group-item list-group-item-action" href="#service">
                        No services
                </Link> */}
                </li>
                <li>
                    <Link  style={{ fontWeight: "bold" }} className="list-group-item list-group-item-action" href="/project">
                       Nos Réalisations
                    </Link>
                </li>
                <li>
                    <Link  style={{ fontWeight: "bold" }} className="list-group-item list-group-item-action" href="/testimonial">
                        Avis Clients
                    </Link>
                </li>
              
            </ul>
        </div>
    );
}
