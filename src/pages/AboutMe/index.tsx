import iconHtml from '../../assets/iconHtml.png'
import iconCss from '../../assets/iconCss.png'

import iconReact from '../../assets/iconReact.png'
import iconReactNative from '../../assets/iconReactNative.png'
import iconTs from '../../assets/iconTs.png'
import iconJs from '../../assets/iconJs.png'
import iconMarks from '../../assets/iconMarks.png'
import iconPlanet from '../../assets/iconPlanet.png'

import iconSql from '../../assets/iconSql.png'
import iconApi from '../../assets/iconApi.png'
import iconGit from '../../assets/iconGit.png'
import iconMaps from '../../assets/iconMaps.png'


import { IoArrowForward } from "react-icons/io5";
import { BsCloudArrowDownFill } from "react-icons/bs";

import imgFlashcard from '../../assets/imgProjetoFlashcard.png'
import imgCapio from '../../assets/imgProjetoCapio.png'
import imgAcord from '../../assets/imgProjetoAcord.png'

import style from './style.module.css'
import { PreviewProject } from '../../components/Preview-project'
import { useNavigate } from 'react-router-dom'


export function AbaoutMe() {


    const navigate = useNavigate()


    return (
        <>
            <section className={style.containerAbouteMe}>
                <div className={style.containerProfile}>
                    <section className={style.containerApresentation} >
                        <h1>Transformando ideias em <strong>soluções</strong> através da <strong>tecnologia.</strong></h1>
                        <div className={style.divLine}></div>
                        <div className={style.myPurpose}>
                            <p>Olá, sou Phelyp Munuera, desenvolvedor apaixonado por tecnologia e pela criação de soluções digitais modernas, eficientes e intuitivas.</p>
                            <p>Tenho experiência com desenvolvimento web, aplicações, automações e integração de diferentes tecnologias, sempre buscando equilibrar funcionalidade, performance e uma boa experiência para o usuário.</p>
                            <p>Acredito que desenvolver vai além de escrever código. É entender necessidades, resolver problemas e transformar desafios em soluções simples, bem estruturadas e eficientes.</p>
                            <p>Meu objetivo é continuar evoluindo como desenvolvedor e criar produtos digitais que façam a diferença, entregando qualidade, inovação e resultados em cada projeto.</p>
                        </div>
                        <a href="">
                            <button className={style.btnDownloadCurriculo} >
                                Baixar Curriculo
                                <BsCloudArrowDownFill />
                            </button>
                        </a>

                    </section>
                    <article className={style.articleAbouteMe}>
                        <div className={style.tecDescription}>
                            <div className={style.myDeclaration}>
                                <div className={style.iconMarkes} >
                                    <img src={iconMarks} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p>Bom código é como um bom design:</p>
                                        <p>quando funciona, ninguém percebe. Mas
                                            quando não funciona, todos percebem.</p>
                                    </div>
                                    <span>— Experiência, empatia e excelência em cada linha.</span>
                                </div>
                                <div>
                                    <img className={style.imgPlanet} src={iconPlanet} alt="" />
                                </div>
                            </div>

                            <div className={style.tecIcon}>
                                <div>
                                    <img src={iconHtml} alt="" />
                                    <span>HTML5</span>
                                </div>
                                <div>
                                    <img src={iconCss} alt="" />
                                    <span>CSS3</span>
                                </div>
                                <div>
                                    <img src={iconJs} alt="" />
                                    <span>JavaScript</span>
                                </div>
                                <div>
                                    <img src={iconTs} alt="" />
                                    <span>TypeScript</span>
                                </div>
                                <div>
                                    <img src={iconReactNative} alt="" />
                                    <span>React Native</span>
                                </div>
                                <div>
                                    <img src={iconReact} alt="" />
                                    <span>React</span>
                                </div>
                                <div>
                                    <img src={iconSql} alt="" />
                                    <span> Banco SQL</span>
                                </div>
                                <div>
                                    <img src={iconApi} alt="" />
                                    <span>API</span>
                                </div>
                                <div>
                                    <img src={iconGit} alt="" />
                                    <span>GitHub</span>
                                </div>
                                <div>
                                    <img src={iconMaps} alt="" />
                                    <span>API Google</span>
                                </div>


                            </div>

                            <div className={style.destaque}>
                                <div className={style.destaqueTitle}>
                                    <div>
                                        <span>PROJETOS EM DESTAQUES</span>
                                        <p>Últimos projetos</p>
                                    </div>

                                </div>

                                <div className={style.previewProject} >
                                    <PreviewProject
                                        img={imgFlashcard}
                                        descriptionImg={'imagem do projeto Flashflow'}
                                        title={'Flash Flow'}
                                        description={'Aplicação web de flash cards'}
                                        url={'https://github.com/PhelypMunuera/flash-flow'}
                                    />

                                    <PreviewProject
                                        img={imgCapio}
                                        descriptionImg={'imagem do projeto Capio'}
                                        title={'Capio'}
                                        description={'Sitema de cadastro da saúde '}
                                        url={'https://github.com/PhelypMunuera/capio'}
                                    />
                                    <PreviewProject
                                        img={imgAcord}
                                        descriptionImg={'imagem do projeto Acord'}
                                        title={'Acord'}
                                        description={'App de alerta de trajetos'}
                                        url={'https://github.com/PhelypMunuera/aplicativo-acord-mobile'}
                                    />

                                </div>

                                <div className={style.containerButtonAllprojects}>

                                        <button onClick={() => navigate('/projetos')} >
                                            Ver todos os projetos
                                            <IoArrowForward />
                                        </button>

                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </>
    )
}