import { Project } from '../../components/Project'
import style from './style.module.css'
import iconReact from '../../assets/iconReact.png'
import iconCss from '../../assets/iconCss.png'
import iconHtml from '../../assets/iconHtml.png'
import iconTs from '../../assets/iconTs.png'
import iconJs from '../../assets/iconJs.png'
import iconSql from '../../assets/iconSql.png'
import iconApi from '../../assets/iconApi.png'
import iconGit from '../../assets/iconGit.png'
import iconMaps from '../../assets/iconMaps.png'

import imgProjetoCapio from '../../assets/imgProjetoCapio.png'
import imgProjetoAurrum from '../../assets/imgProjetoAurrum.png'
import imgProjetoFlashcard from '../../assets/imgProjetoFlashcard.png'
import imgProjetoPomodoro from '../../assets/imgProjetoPomodoro.png'
import imgProjetoAcord from '../../assets/imgProjetoAcord.png'

import { Technology } from '../../components/Technology'

export function Projects() {

    return (
        <>
            <section className={style.container}>
                <div className={style.containerProfile}>
                    <section className={style.containerApresentation} >
                        <h1>Meus <strong>Projetos</strong></h1>
                        <h2>Confira alguns projetos que desenvolvi</h2>
                    </section>
                    <section className={style.containerProjects}>
                        <Project
                            image={imgProjetoCapio}
                            href={'https://github.com/PhelypMunuera/capio'}
                            descriptionImg={'Imagem ilustrativa do programa'}
                            title={'Sitema CAPIO'}
                            when={'em desenvolvimento'}
                            description={`Sistema de cadastro de pacientes implantado na Secretaria 
                                        de Saúde de São Sebastião, desenvolvido para organizar e 
                                        agilizar o atendimento, centralizar informações e padronizar
                                        o registro dos usuários da rede municipal de saúde.`}
                            technology={
                                <div className={style.containerTechnology}>
                                    <Technology image={iconCss} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                    <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'React'} />
                                    <Technology image={iconJs} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                    <Technology image={iconTs} descriptionImg={'logo do React Js'} technology={'TypeScript'} />
                                    <Technology image={iconSql} descriptionImg={'logo do React Js'} technology={'SQL'} />
                                    <Technology image={iconApi} descriptionImg={'logo do React Js'} technology={'API'} />
                                </div>
                            }
                        />
                        <Project
                            image={imgProjetoFlashcard}
                            href={'https://github.com/PhelypMunuera/flash-flow'}
                            descriptionImg={'FlashFlow'}
                            title={'FlashFlow'}
                            when={'Julho 26'}
                            description={`Aplicação desenvolvida para criar, organizar e revisar flashcards, facilitando o aprendizado 
                                e a memorização de conceitos relacionados à programação.`}
                            technology={
                                <div className={style.containerTechnology}>
                                    <Technology image={iconHtml} descriptionImg={'logo do React Js'} technology={'HTML'} />
                                    <Technology image={iconCss} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                    <Technology image={iconJs} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                    <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'React'} />
                                    <Technology image={iconGit} descriptionImg={'logo do React Js'} technology={'GitHube'} />
                                    <Technology image={iconTs} descriptionImg={'logo do React Js'} technology={'TypeScript'} />
                                </div>
                            }
                        />
                        <Project
                            image={imgProjetoAurrum}
                            href={'https://github.com/PhelypMunuera/aurum'}
                            descriptionImg={'Imagem generica'}
                            title={'Aurum'}
                            when={'Junho 26'}
                            description={`Desenvolvimento do front-end de um e-commerce de relógios, com foco em uma experiência de compra moderna, responsiva e intuitiva.`}
                            technology={
                                <div className={style.containerTechnology}>
                                    <Technology image={iconHtml} descriptionImg={'logo do React Js'} technology={'HTML'} />
                                    <Technology image={iconCss} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                    <Technology image={iconJs} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                    <Technology image={iconGit} descriptionImg={'logo do React Js'} technology={'GitHube'} />   
                                </div>
                            }
                        />
                           <Project
                            image={imgProjetoPomodoro}
                            href={'https://github.com/PhelypMunuera/pomodoro'}
                            descriptionImg={'Pomodoro'}
                            title={'Pomodoro'}
                            when={'Março 26'}
                            description={`Timer desenvolvido inteiramente em JavaScript puro, criado para auxiliar na produtividade e no gerenciamento do tempo, permitindo organizar períodos de foco e descanso de forma simples e eficiente.`}
                            technology={
                                <div className={style.containerTechnology}>
                                    <Technology image={iconHtml} descriptionImg={'logo do React Js'} technology={'HTML'} />
                                    <Technology image={iconCss} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                    <Technology image={iconJs} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                    <Technology image={iconGit} descriptionImg={'logo do React Js'} technology={'GitHube'} />   
                                </div>
                            }
                        />
                        <Project
                            image={imgProjetoAcord}
                            href={'https://github.com/PhelypMunuera/aplicativo-acord-mobile'}
                            descriptionImg={'Imagem generica'}
                            title={'Acord'}
                            when={'Janeiro 26'}
                            description={`Aplicativo proprio em produção para ajudar pessoas no dia a dia, a aplicação usa geo referenciamento em tempo real para despertar e avisar o ususario o hora dele desembarcar `}
                            technology={
                                <div className={style.containerTechnology}>
                                    <Technology image={iconMaps} descriptionImg={'logo do React Js'} technology={'API Google' } />
                                    <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'React Native'} />
                                    <Technology image={iconCss} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                    <Technology image={iconJs} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                    <Technology image={iconTs} descriptionImg={'logo do React Js'} technology={'TypeScript'} />
                                </div>
                            }
                        />
                    </section>

                </div>
            </section>
        </>
    )
} 