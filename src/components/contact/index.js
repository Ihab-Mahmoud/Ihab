import React, { useEffect, useRef, useState } from 'react'
import Animatedletters from '../animated-letters'

import "./index.scss"
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
const Contact = () =>
{
    const [className, setClassName] = useState("text-animate")
    const position = [40.207719,28.954071]

    const formRef = useRef()
    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setClassName("text-animate-hover")
        }, 4000);
        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_jawh8wd', 'template_vqnqmfl', formRef.current, 'eiQMlKQlgnuTdrTmR')
            .then(() =>
            {
                alert("your message has been sent")
                e.target.reset();
            }, () =>
            {
                alert("something went wrong,please try again");
            });
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <Animatedletters letterClass={className} strArray={[`C`, `o`, `n`, `t`, `a`, `c`, `t`, ` `, `M`, `e`]} idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Ihab Mahmoud <br />
                    Türkiye <br />
                    Bursa / Nilüfer / beşevler güllü ST NO: 7 <br />
                    <span>Gmail : hakemehab22@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Ihab is here. :) <br /> Come and say hi.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact