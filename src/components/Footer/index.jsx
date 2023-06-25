import style from "./Footer.module.scss";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.socialList}>
          <li>
            <a href="/">
              <img
                src={facebook}
                alt="Icone do facebook"
                className={style.socialList__imagem}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={instagram}
                alt="Icone do instagram"
                className={style.socialList__imagem}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={twitter}
                alt="Icone do twitter"
                className={style.socialList__imagem}
              />
            </a>
          </li>
        </ul>
      </nav>
      <p className={style.socialList__madeBy}>
        Desenvolvido por MarchingBeagle
      </p>
    </footer>
  );
}

export default Footer;
