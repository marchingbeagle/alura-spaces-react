import style from "./Menu.module.scss";
import homeAtivo from "assets/icons/home-ativo.png";
import maisCurtidasInativo from "assets/icons/mais-curtidas-inativo.png";
import maisVistasInativo from "assets/icons/mais-vistas-inativo.png";
import novasInativo from "assets/icons/novas-inativo.png";
import surpreendaMe from "assets/icons/surpreenda-me-inativo.png";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__lista}>
        <li className={style.menu__item}>
          <img src={homeAtivo} alt="Icone de inicio" />
          <a href="/">Início</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisCurtidasInativo} alt="Icone de mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisVistasInativo} alt="Icone de mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={style.menu__item}>
          <img src={novasInativo} alt="Icone de novas" />
          <a href="/">Novas</a>
        </li>
        <li className={style.menu__item}>
          <img src={surpreendaMe} alt="Icone de surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
