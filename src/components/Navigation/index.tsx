
import { IoHomeOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import curriculo from  '../../assets/avatar.png' //aqui tem que deixar meu curriculo

import avatar from "../../assets/avatar.png";
import { ButtonMenu } from "../ButtonMenu";

import style from './style.module.css'

import { useLocation } from 'react-router-dom'

export function Navigation() {

  const { pathname } = useLocation()

  return (
    <section className={style.container}>
      <div className={style.profile}>
        <img src={avatar} alt="" />
        <strong>Phelyp Munuera</strong>
        <span>Desenvolvedor Front-end</span>
      </div>
      <nav>
        <ul>
          <li>
            <ButtonMenu url={'/'} isActive={pathname ==='/'}  icon={<IoHomeOutline />} text={'Início'} />
          </li>
          <li>
            <ButtonMenu url={'/projetos'}  isActive={pathname ==='/projetos'} icon={<IoBriefcaseOutline />} text={'Projetos'} />
          </li>
          <li>
            <ButtonMenu url={'/sobre-mim'}  isActive={pathname ==='/sobre-mim'}  icon={<FaUserAstronaut />} text={'Sobre Mim'} />
          </li>
          <li>
            <ButtonMenu url={'/contatos'}  isActive={pathname ==='/contatos'}  icon={<GoMail />} text={'Contato'} />
          </li>
        </ul>
      </nav>
      <nav className={style.contactsButons}>
        <span>CONECTE-SE</span>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/phelypmunuera/"  target="_blank" rel="noopener noreferrer">
              <button>
                <FaLinkedin />
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/PhelypMunuera"  target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub />
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/phemunuera/"  target="_blank" rel="noopener noreferrer">
              <button>
                <AiFillInstagram />
              </button>
            </a>
          </li>
          <li>
            <a href={curriculo} download>
              <button>
                <FaCloudDownloadAlt />
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.containerStatusAtt}>
        <div className={style.statusAtt}/>
        <span>Disponivel para novos projetos</span>
      </div>
    </section>
  );
}
