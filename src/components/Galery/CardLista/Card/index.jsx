import open from "./open.png";
import favorito from "./favorito.png";

function Card({ foto, styles }) {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src={favorito} alt="Icone coração de curtir" />
          <img src={open} alt="Icone de abrir modal" />
        </span>
      </div>
    </li>
  );
}

export default Card;
