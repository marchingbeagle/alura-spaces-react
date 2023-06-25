function Banner({ img, content, style, alt }) {
  return (
    <div className={style}>
      <h1>{content}</h1>
      <img src={img} alt={alt} />
    </div>
  );
}

export default Banner;
