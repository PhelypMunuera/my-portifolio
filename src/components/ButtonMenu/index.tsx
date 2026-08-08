import type { ReactNode } from 'react';
import style from  './style.module.css'

type ButtonMenuProps = {
  text: string;
  icon: ReactNode;
  isActive?: boolean
};

export function ButtonMenu({ text, icon, isActive }: ButtonMenuProps) {
  return <button  className={isActive ? style.btnActive : style.btnBase}>
    {icon}
    {text}
    </button>;
}
