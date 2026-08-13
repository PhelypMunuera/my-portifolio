import { MdArrowOutward } from "react-icons/md";

import style from './style.module.css'
type PreviewProjectProps = {
    img: string,
    descriptionImg: string,
    title: string,
    description: string,
    url: string,
}

export function PreviewProject({img, descriptionImg, title, description,  url}: PreviewProjectProps) {

    return(
        <div className={style.backgroundPreviewProject}>
           <img src={img} alt={descriptionImg} />
           <h1>{title}</h1>
            <div>
            <span>{description}</span>
           <a href={url} target='_blank'>
            <MdArrowOutward className={style.icon} />
           </a>
            </div>
        </div>
     ); 
    }