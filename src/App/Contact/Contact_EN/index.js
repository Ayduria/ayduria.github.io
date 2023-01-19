// src/components/Contact.js
import "./index.css"
import React from "react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import ContactForm from "./ContactForm"

function Contact() {
    return(
        <section id="contact" className="relative">
            <h1 className="w-full text-white sm:text-4xl text-3xl font-medium title-font mt-8">
                Contact Me !
            </h1>
            <div className="container mx-auto flex px-10 pt-6 pb-10 md:flex-row flex-col items-center md:items-start">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0">
                    <p className="leading-relaxed mb-5">
                        You have an offer for me or questions to ask me ? Do not hesitate to contact me, it will be my pleasure to discuss with you !
                    </p>
                    <div>
                        <a className="mr-5" href="mailto:lapointeannlaurie@gmail.com">
                            <EnvelopeIcon className="w-12 inline-block mb-4 filter-white"/>
                        </a>
                        <a className="mr-5" href="https://www.linkedin.com/in/annlaurie-lapointe/" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 inline-block mb-4 filter-white" alt="LinkedIn Logo" src="./img/icons/linkedin.svg"/>
                        </a>
                        <a href="https://github.com/Ayduria" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 inline-block mb-4 filter-white" alt="GitHub Logo" src="./img/icons/github.svg"/>
                        </a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;