import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

import style from './style.module.css'


export function Layout() {

  return (
    <div className={style.container}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}