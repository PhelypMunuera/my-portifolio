import { Navigation } from "../../components/Navigation";
import { Home } from "../Home";
import style from './style.module.css'
export function Layout() {

  return (
    <div className={style.container}>
      <Navigation />
      <main>
        <Home />
      </main>
    </div>
  )
}