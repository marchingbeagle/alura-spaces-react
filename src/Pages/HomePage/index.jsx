import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import Galery from "components/Galery";
import Populares from "components/Galery/Populares";
import style from "./HomePage.module.scss";
import banner from "./banner.png";

function HomePage() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.principal}>
          <Menu />
          <Banner
            img={banner}
            style={style.principal__imagem}
            content="A galeria mais completa do espaço"
            alt="A imagem da terra vista do espaço"
          />
        </section>
        <div className={style.galeria}>
          <div>
            <Galery />
          </div>
          <Populares />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
