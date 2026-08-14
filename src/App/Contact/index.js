import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../Language/languageContext"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import ContactForm from "./ContactForm"

function Contact() {
    const { languageData } = useContext(LanguageContext);

    if (!languageData.contact) return null;

    return(
        <section id="contact" className="relative">
            <h1 className="w-full text-white sm:text-4xl text-3xl font-medium title-font mt-8">
                { languageData.contact.title }
            </h1>
            <div className="container mx-auto flex px-10 pt-6 pb-10 md:flex-row flex-col items-center md:items-start">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0">
                    <p className="leading-relaxed mb-5">
                        { languageData.contact.tagline }
                    </p>
                    <div>
                        <a className="mr-5" href="mailto:dev@elilapointe.com">
                            <EnvelopeIcon className="w-12 inline-block mb-4 filter-white"/>
                        </a>
                        <a className="mr-5" href="https://www.linkedin.com/in/eli-lapointe/" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 inline-block mb-4 filter-white" alt="LinkedIn Logo" src="./img/icons/linkedin.svg"/>
                        </a>
                        <a className="mr-5" href="https://github.com/Ayduria" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 inline-block mb-4 filter-white" alt="GitHub Logo" src="./img/icons/github.svg"/>
                        </a>
                        <a href="https://spacymallow.itch.io/" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 inline-block mb-4 filter-white" alt="itch.io logo" src="./img/icons/itch-io.png"/>
                        </a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;