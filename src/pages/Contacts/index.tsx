import { HiArrowDownTray } from "react-icons/hi2";

import mylogo from '../../assets/mylogo.png'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { Contatc } from "../../components/Contatic";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export function Contact() {
    const navigate = useNavigate()
return( 
    <>
    <section className={style.container}>
       <div className={style.containerProfile}>
        <section className={style.containerApresentation} >
            <div className={style.flag}>
                <img src={mylogo} alt="" />
                Vamos criar algo incrivel
            </div>
            <div className={style.containerTitlePage}>
                <h1>Vamos trabalhar</h1>
                <span>juntos?</span>
            </div>
            <div className={style.divLine}></div>
            <div className={style.myPurpose}>
                <p>Estou em busca de novas oportunidades para crescer, contribuir e evoluir como desenvolvedor.</p>
                <p>Tenho interesse em fazer parte de uma equipe onde eu possa aplicar meus conhecimentos, enfrentar novos desafios e colaborar na construção de produtos e soluções digitais de qualidade.</p>
                <p>Se você está procurando um desenvolvedor comprometido, curioso e em constante evolução, entre em contato comigo. Estou disponível para conversar sobre oportunidades, projetos e como posso contribuir com a sua equipe.</p>
            </div>
                           
            <button onClick={() => navigate('/projetos')} className={style.btnProjects}>
                Baixe meu curriculo aqui
                <HiArrowDownTray />
            </button>
        </section>
        <article className={style.articleContatcs}>
        <Contatc  
            children={<FaLinkedinIn />}
            title={'LinkedinIn'}
            link={'https://www.linkedin.com/in/phelypmunuera/'}
        />
          <Contatc  
            children={<FaGithub />}
            title={'Github'}
            link={'https://github.com/PhelypMunuera'}
        />
          <Contatc  
            children={<FaInstagram />}
            title={'Instagram'}
            link={'https://www.instagram.com/phemunuera/' }
        />
          <Contatc  
            children={<FaWhatsapp />}
            title={'Whatsapp'}
            link={'+55 (12) 99118-2882'}
        />
          <Contatc  
            children={<MdMailOutline />}
            title={'E-mail'}
            link={'mphelyp@gmail.com'}
        />
        </article>
        
       </div>
    </section>
    </>
)}