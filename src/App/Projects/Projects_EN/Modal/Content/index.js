// src/components/Projects.js
import Lux from "./Lux"
import Alka from "./Alka"
import CentreNationalExposition from "./CentreNationalExposition"
import PotionFrenzy from "./PotionFrenzy"
import TimeSwap from "./TimeSwap"
import FeatureHunter from "./FeatureHunter"
import AsteroidField from "./AsteroidField"
import GamersGuess from "./GamersGuess"
import LocationFilm from "./LocationFilm"
import DroidRush from "./DroidRush"
import LoadingGif from '../../../../../Assets/img/loading-gif.gif'

const projects = {
    'Lux': Lux,
    'ALKA': Alka,
    'Centre national d\'exposition' : CentreNationalExposition,
    'Feature Hunter' : FeatureHunter,
    'Potion Frenzy' : PotionFrenzy,
    'Time Swap' : TimeSwap,
    'Asteroid Field' : AsteroidField,
    'Gamer\'s Guess' : GamersGuess,
    'Movie Renting' : LocationFilm,
    'Droid Rush' : DroidRush,
}

const images = {
    'LoadingGif': LoadingGif,
}

export { projects, images }