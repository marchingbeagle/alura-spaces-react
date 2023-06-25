import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do alura space" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="Icone de lupa" />
      </div>
    </header>
  );
}
