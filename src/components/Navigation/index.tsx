
import { IoHomeOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

import avatar from "../../assets/avatar.png";
import { ButtonMenu } from "../ButtonMenu";

import style from './style.module.css'

export function Navigation() {

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
            <ButtonMenu isActive={true}  icon={<IoHomeOutline />} text={'Início'} />
          </li>
          <li>
            <ButtonMenu icon={<IoBriefcaseOutline />} text={'Projetos'} />
          </li>
          <li>
            <ButtonMenu icon={<FaUserAstronaut />} text={'Sobre Mim'} />
          </li>
          <li>
            <ButtonMenu icon={<GoMail />} text={'Contato'} />
          </li>
        </ul>
      </nav>
      <nav className={style.contactsButons}>
        <span>CONECTE-SE</span>
        <ul>
          <li>
            <button>
              <FaLinkedin />
            </button>
          </li>
          <li>
            <button>
              <FaGithub />
            </button>
          </li>

          <li>
            <button>
              <AiFillInstagram />
            </button>
          </li>
          <li>
            <button>
              <FaCloudDownloadAlt />
            </button>
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
