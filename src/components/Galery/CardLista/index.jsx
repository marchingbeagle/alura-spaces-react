import Card from "./Card";

export default function CardLista({ fotos, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => (
        <Card key={foto.id} foto={foto} styles={styles} />
      ))}
    </ul>
  );
}
