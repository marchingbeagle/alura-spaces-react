import styleCSS from "./Tags.module.scss";

function Tags({ tags, filter, setItens, fotos }) {
  return (
    <div className={styleCSS.tags}>
      <p>Filtre por tags:</p>
      <ul className={styleCSS.tags__lista}>
        {tags.map((tag, index) => (
          <li onClick={() => filter(tag)} key={index}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}

export default Tags;
