// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function Alka( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>ALKA est un jeu de tir à la première personne où 4 joueurs coopéreront en ligne contre l’environnement.  Afin de sauver ce qui reste de l’humanité, les joueurs incarneront des drones pour éliminer les tumeurs et leurs sbires qui tentent d’envahir le bunker.</p>
                </blockquote>
            </div>

            <div className="project-section">
                <h1>Description du projet</h1>
                <p>ALKA est un jeu multijoueur en ligne où de 2 à 4 joueurs incarnent des drones armés ayant pour mission d'éliminer une infection se propageant dans un bunker. Pour s'y faire, des nodes doivent être détruits, lesquels sont protégés par divers ennemis.</p>

                <div className="iframe-container">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/_pX1EpqLWC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>

                <p>Le jeu a débuté son développement durant la session d'hiver 2022. Bon nombre d'étudiants de différentes disciplines se sont joints au projet, dont plusieurs programmeurs de l'UQAC. À la fin de cette session, un prototype a été rendu, dont la bande-annonce se trouve ci-dessus. Toutefois, ce n'était pas terminé pour ALKA; le jeu a repris son développement en automne 2022. C'est à ce moment qu'on m'a demandé si je voulais me joindre au projet, ce que j'ai accepté avec enthousiasme.</p>
                <p>Suivant sa phase de prototypage, le projet a récemment terminé sa phase de préproduction, sur laquelle j'ai travaillé pendant une session. Il se poursuit présentement en production.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://uqac.itch.io/alka" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                    Voir le premier prototype
                </a>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <p>Le projet étant déjà bien entamé à mon arrivée, une bonne partie du début de la préproduction a consisté à explorer et analyser les systèmes déjà en place. Il a ensuite été décidé que je travaillerais sur l'AI, ayant déjà de l'intérêt et de l'expérience en ce sens sur d'autres projets.</p>

                <h2>AI des snipers</h2>
                
                <p>J'ai assisté à plusieurs rencontres avec les autres programmeurs de mon équipe. Ensemble, nous avons d'abord brainstormé différentes façons d'améliorer l'AI des ennemis déjà présents dans le jeu et réalisé des schémas représentant les comportements souhaités. Je me suis porté volontaire à travailler sur un ennemi en particulier, le sniper.</p>

                <img
                    alt="AI behavior plan drawing"
                    src="./img/projects/alka_ai_plan.jpg"
                />

                <p>Le comportement de base du sniper peut être expliqué simplement: il ne se déplace pas sur un navmesh, mais se téléporte plutôt de zones en zones, placées à la main dans les niveaux, en calculant la priorité de chaque zone proche de lui selon des critères appropriés à la situation. Lorsqu'il repère le joueur, il l'attaque avec des projectiles.</p>

                <p>À mon arrivée dans le projet, le système de base était déjà bien implémenté, mais le sniper n'avait pas beaucoup de variété dans son comportement: après avoir spawn près d'un node, il s'éloignait du node et demeurait dans cette nouvelle zone, s'engageant dans un duel jusqu'à la mort avec le joueur lorsque ce dernier s'approchait. J'ai donc travaillé à diversifier son comportement selon ce qui avait été établi dans l'équipe.</p>

                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/sniper-ai-gym.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <p>J'ai amélioré certains comportements déjà présents en plus d'en ajouter des nouveaux. Ces comportements peuvent tous être paramétrés avec des distances maximales/minimales selon le cas.</p>

                <h3>Répartition initiale</h3>
                <p>Le sniper avait déjà un comportement consistant à s'éloigner du node après avoir spawn en début de partie. Cependant, son choix de zone était plutôt aléatoire. J'ai amélioré ce comportement en ajoutant un calcul de distance qui donne plus de priorité aux zones atteignables les plus éloignées de la zone actuelle du sniper.</p>

                <h3>Traquage</h3>
                <p>J'ai ajouté au sniper un comportement de traquage afin de rendre plus dynamique le combat contre cet ennemi. Lorsque le sniper repère un joueur, il rentre dans le sol et se téléporte à proximité de ce denier sans toutefois aller trop près. Il répète ce comportement après un certain moment, se déplaçant ainsi pour attaquer le joueur à partir de différentes positions.</p>

                <h3>Fuite</h3>
                <p>J'ai également ajouté au sniper un comportement de fuite. Lorsque le sniper est suffisamment blessé, il rentre dans le sol et se téléporte à une zone éloignée du joueur. Le système de blessure était déjà partiellement implémenté mais non utilisé; je l'ai donc rendu fonctionnel et m'en suis servi comme base pour la fuite.</p>

                <h2>AI des tanks</h2>

                <p>Durant la phase de brainstorm des ennemis initiale, nous avons également pensé au comportement d'un nouvel enemy : le tank. Cette bête gigantesque protègerait le node et chargerait tout joueur tentant d'approcher. Toutefois, cet ennemi n'est resté qu'une idée durant la phase de prototypage.</p>

                <img
                    alt="AI behavior plan drawing"
                    src="./img/projects/alka_tank_ai.jpg"
                />

                 <p>L'implémentation du tank a débuté dans la phase de production, durant mon second trimestre sur le projet. J'ai embarqué sur la tâche, enthousiaste à l'idée de travailler sur quelque chose de nouveau.</p>
                
                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/TankVideo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <h3>Défense</h3>

                <p>Quand aucun joueur n'est à proximité du node, j'ai implémenté un comportement de défense sur le tank. Il se déplace en avant du point vulnérable du node et entre dans un mode de sommeil, protégeant le point vulnérable du node autant que le sien : durant cette phase, le tank est invulnérable et ne peut pas être tué.</p>

                <h3>Attaque</h3>

                <p>Aussitôt qu'un joueur est à une certaine portée du node, le tank se réveille de son sommeil et adopte un autre comportement que j'ai implémenté, qui est l'attaque. Il charge sur sa cible, l'attaquant avec une éclaboussure aussitôt qu'il est à portée de celle-ci. Si le joueur s'éloigne trop du node, le tank abandonne la poursuite et retourne à son comportement de défense.</p>

                <p>Durant cette phase, le tank n'est plus invulnérable. Toutefois, la seule façon de le tuer est de tirer sur son point vulnérable sur son dos. Cela nécessite de la coopération de la part des joueurs, puisqu'il y en a un qui doit attirer l'attention du tank pour qu'un autre puisse aller derrière lui et attaquer son point vulnérable.</p>

            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
            <h2>Artistes du NAD</h2>
            <p>
                Alexandre Bonin<br/>
                Cyril Beze<br/>
                Émilie Lavoie<br/>
                Issam Aloulou<br/>
                Jérémie Auclair<br/>
                Julien Berthier<br/>
                Qian Ting Zhang<br/>
                Vincent Gagnon<br/>
                Karîm Désir<br/>
                William van Herck<br/>
                Laurence Cloutier<br/>
                Félix Lemonde-Champagne<br/>
                Hugo Babin<br/>
                Alexandre Mignot<br/>
                Vincent Dupéron<br/>
                Virginie Juteau<br/>
                François Chiasson<br/>
                Samuel Gauthier Cyr<br/>
                Natalya Fedorenko<br/>
                Nickolas Ménard<br/>
                Alexandre Ruel<br/>
            </p>
            <h2>Programmeurs du DIM</h2>
            <p>
                Adrien Garbani<br/>
                Clément Chastaingt<br/>
                Jean-Sébastien Boutin<br/>
                Léonard Rizzo<br/>
                Marc-Antoine Lebel<br/>
                Samuel Potvin<br/>
                Thomas Bergeron<br/>
                Patrick McRea-Desjardins<br/>
                Eli Lapointe<br/>
                Minh-Qhan Bui<br/>
                Pierre-Jean Morel<br/>
                
            </p>
            <h2>Musiciens de l'UdeM</h2>
            <p>
                Eliazer Kramer<br/>
                Evan Burman<br/>
                Antoine Lussier<br/>
                Tyrai Laughton<br/>
            </p>
        </div>
        </div>
    )
}

export default Alka;