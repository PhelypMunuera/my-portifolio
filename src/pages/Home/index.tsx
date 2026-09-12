import iconHtml from '../../assets/iconHtml.png'
import iconCss from '../../assets/iconCss.png'
import iconGIt from '../../assets/iconGIt.png'
import iconReact from '../../assets/iconReact.png'
import iconTs from '../../assets/iconTs.png'
import iconJs from '../../assets/iconJs.png'
import codeIcon from '../../assets/codeIcon.png'
import { IoArrowForwardSharp } from "react-icons/io5"

import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()
return( 
    <>
    <section className={style.container}>
       <div className={style.containerProfile}>
        <section className={style.containerApresentation} >
            <span>
                Olá, eu sou 👋
            </span>
            <h1>Phelyp <strong>Munuera</strong></h1>
            <h2>Desenvovedor Front-end</h2>
            <div className={style.divLine}></div>
            <div className={style.myPurpose}>
                <p>Desenvolvendo interfaces que unem tecnologia, experiência e propósito.</p>
                <p>Desenvolvedor Front-end focado em React e TypeScript, criando interfaces modernas, responsivas e intuitivas. Busco transformar boas ideias em experiências digitais bem construídas e continuar evoluindo através de desafios reais.</p>
            </div>
                           
            <button onClick={() => navigate('/projetos')} className={style.btnProjects}>
            Conheça meus projetos
                <IoArrowForwardSharp />
            </button>
        </section>
        <article className={style.articleHome}>
            <div className={style.tecDescription}>
                <div className={style.codeIcon}>
                    <img src={codeIcon} alt="Icone de Codigo" />
                    <div>
                        <strong>Desenvolvimento Front-end</strong>
                        <p>Aplicações responsivas e componentizadas utilizando React, TypeScript e tecnologias modernas da web.</p>
                    </div>
                </div>       
                <div className={style.tecIcon}>
                    <div>
                        <img src={iconHtml} alt="" />
                        <span>HTML5</span>
                    </div>
                   
                    <div>
                        <img src={iconJs } alt="" />
                        <span>JavaScript</span>
                    </div>
                    <div>
                        <img src={iconGIt} alt="" />
                        <span>GitHub</span>
                    </div>
                    <div>
                        <img src={iconCss} alt="" />
                        <span>CSS3</span>
                    </div>
                    <div>
                        <img src={iconTs} alt="" />
                        <span>TypeScript</span>
                    </div>
                    <div>
                        <img src={iconReact} alt="" />
                        <span>React</span>
                    </div>
           
                </div>
                <div className={style.buletPoints}>
                    <div>
                        <span>5+</span>
                        <p>Projetos práticos</p>
                    </div>
                    <div>
                        <span>6+</span>
                        <p>Tecnologias utilizadas</p>
                    </div>
                    <div>
                        <span>3+</span>
                        <p>Formações em tecnologia</p>
                    </div>
                </div>
            </div>
        </article>
        
       </div>
    </section>
    </>
)}