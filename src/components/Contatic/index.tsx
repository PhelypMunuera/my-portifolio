import { BsBoxArrowUpRight } from "react-icons/bs";
import type { ReactElement } from "react";

import style from './style.module.css'

type ContatcProps = {
    children: ReactElement
    title: string,
    link: string
    text: string
}

export function Contatc({ children, title, link, text }: ContatcProps) {
    return(
        <div className={style.backgroundContatc}>
           <div className={style.logoContact}>
           {children}
           </div>
           <div className={style.textContent}>
                <h1>{title}</h1>
                <span>{text}</span>
           </div>
          
           
            <button className={style.openContatic} onClick={() => window.open(link,  "_blank")}>
                <BsBoxArrowUpRight />
            </button>
        
        </div>
    )
}