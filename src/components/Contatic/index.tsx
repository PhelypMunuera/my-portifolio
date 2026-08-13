// import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import type { ReactElement } from "react";

import style from './style.module.css'

type ContatcProps = {
    children: ReactElement
    title: string,
    link: string
}

export function Contatc({ children, title, link }: ContatcProps) {
    return(
        <div className={style.backgroundContatc}>
           <div className={style.logoContact}>
           {children}
           </div>
           <div className={style.textContent}>
                <h1>{title}</h1>
                <span>{link}</span>
           </div>
           <div className={style.copyContainer}>
           {/* <BsBoxArrowUpRight /> */}
           <MdOutlineContentCopy />
           </div>
        </div>
    )
}