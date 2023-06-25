import Button from "components/Button";
import styles from "./Populares.module.scss";
import populares from "./populares.json";

function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {populares.map((foto) => (
          <li key={foto.id}>
            <img src={foto.path} alt={foto.alt}></img>
          </li>
        ))}
      </ul>
      <Button>Ver mais fotos</Button>
    </aside>
  );
}

export default Populares;
