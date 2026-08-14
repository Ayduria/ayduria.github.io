import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../Language/languageContext"

function Copyright() {
    const { languageData } = useContext(LanguageContext);

    if (!languageData.copyright) return null;
  
    return(
        <footer className="text-gray-400 bg-gray-800 py-5">
          <b>© Eli Lapointe, 2026</b> | { languageData.copyright.section1 } <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a> | { languageData.copyright.section2 } <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">Heroicons</a> { languageData.copyright.section3 } <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>
        </footer>
    );
}

export default Copyright;