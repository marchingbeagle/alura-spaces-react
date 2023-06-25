import style from "./Button.module.scss";

export default function Button({ children }) {
  return <button className={style.botao}>{children}</button>;
}
