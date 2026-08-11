import type { ReactNode } from 'react';
import style from  './style.module.css'
import { useNavigate } from 'react-router-dom';

type ButtonMenuProps = {
  text: string;
  icon: ReactNode;
  isActive?: boolean;
  url?: string
};

export function ButtonMenu({ text, icon, isActive, url }: ButtonMenuProps) {
  const navigate = useNavigate()
  return <button   onClick={() => (url ? navigate(url) : null)}  className={isActive ? style.btnActive : style.btnBase}>
    {icon}
    {text}
    </button>;
}
