'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Section1() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        // Contact Area Start
        <div className="contact-page sp">
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* ---- Infos de contact ---- */}
                    <div className="col-lg-6">
                        <div className="heading6">
                            <span className="span">Contactez-Nous</span>
                            <h2>👉 Contactez-nous – Donnons Vie à vos Projets</h2>
                            <div className="space16"></div>
                            <p>
                                Nous serions ravis d’échanger avec vous !  
                                Que ce soit pour discuter de vos projets digitaux, demander un devis, 
                                ou simplement en savoir plus sur nos services IT, notre équipe est à votre écoute.
                            </p>
                        </div>

                        <div className="contact-page-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon1.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Appelez-nous</p>
                                            <h4>
                                                <Link href="tel:+212600000000">+212 6 00 00 00 00</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="contact-box contact-box2">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon2.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Email</p>
                                            <h4>
                                                <Link href="mailto:contact@atlasit.ma">contact@atlasit.ma</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---- Formulaire ---- */}
                    <div className="col-lg-6">
                        <div className="contact1-form">
                            <div className="heading1">
                                <h3>Envoyez-nous un Message</h3>
                                <div className="space16"></div>
                                <p>
                                    Remplissez le formulaire ci-dessous et nous reviendrons vers vous rapidement.
                                </p>
                            </div>
                            <div className="space10"></div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Prénom"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Nom"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Téléphone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Sujet"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <textarea
                                                rows={4}
                                                name="message"
                                                placeholder="Votre message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="button">
                                            <button type="submit" className="theme-btn15">
                                                Envoyer <span><i className="fa-solid fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // Contact Area End
    );
}
