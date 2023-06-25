import { useState } from "react";
import Tags from "../Tags";
import CardLista from "./CardLista";
import styles from "./Galery.module.scss";
import fotos from "./fotos.json";

export default function Galery() {
  const [Itens, setItens] = useState(fotos);

  const tags = [...new Set(fotos.map((foto) => foto.tag))];

  const filter = (tag) => {
    setItens(fotos.filter((foto) => foto.tag === tag));
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filter={filter} setItens={setItens} fotos={fotos} />
      <CardLista fotos={Itens} styles={styles} />
    </section>
  );
}
