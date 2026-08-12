import { Project } from '../../components/Project'
import style from './style.module.css'
import iconReact from '../../assets/iconReact.png'
import imgGenerica from '../../assets/imgGenerica.png'
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
                            image={imgGenerica}
                            descriptionImg={'Imagem generica'}
                            title={'Ignite Feed'}
                            when={'Jan 26'}
                            description={`Aplicação em React e TypeScript com feed de 
                                        mensagens e interações entre usuários, desenvolvida para 
                                        aprimorar componentização e criação de interfaces.`}
                            technology={
                            <div className={style.containerTechnology}>
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'React'} />
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'Node.js'} />
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'javaScript'} />
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'TypeScript'} />
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'CSS'} />
                                <Technology image={iconReact} descriptionImg={'logo do React Js'} technology={'HTML'} />
                            </div>
                            }
                        />

                    </section>

                </div>
            </section>
        </>
    )
} 