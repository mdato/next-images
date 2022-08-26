import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imagen3 from "../public/images/3.jpg";
import imagen4 from "../public/images/4.jpg";

// aqui ponemos el loader con la url base de la imagen
{
  /* https://notife.com/wp-content/uploads/2015/02/pappo.jpg */
}
const myLoader = ({ src, width, quality }) => {
  return `https://notife.com/wp-content/uploads/2015/02/${src}?s=${width}`;
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image src="/images/1.jpg" width={5184 / 10} height={3888 / 10} />

        <div style={{ display: "flex" }}>
          <Image src="/images/2.jpg" width={5184 / 10} height={3888 / 10} />
          <h2>imagen a la izquierda</h2>
        </div>

        {/* en los dos casos siguientes debemos poner en next.config */}
        {/* module.exports = {
          images: {
            domains: ['images.unsplash.com']              
          }
        } */}
        <Image
          src="https://images.unsplash.com/photo-1661511762608-fda6b7b45f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
          width={5184 / 10}
          height={3888 / 10}
        />

        {/* centrando un texto sobre una imagen con blendMode y opacity */}
        <div
          style={{
            width: 5184 / 10,
            height: 3888 / 10,
            position: "relative",
            display: 'grid',
            placeItems: 'center',
            backgroundImage:
              "url(https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundBlendMode: "soft-light",
            backgroundColor: "rgba(0, 0, 0, 0.53)",
          }}
        >
          <div style={{ color: "white", position: "relative" }}>
            <h2>texto</h2>
          </div>
        </div>

        {/* en los 2 casos siguientes podemos agregar tambien el placeholder="blue" que muestra una imagen borrosa antes de la carga */}
        <div style={{ display: "flex" }}>
          <h2>imagen a la derecha</h2>
          <Image
            src={imagen3}
            width={5184 / 10}
            height={3888 / 10}
            placeholder="blur"
          />
        </div>

        <div style={{ position: "relative", width: "300px", height: "200px" }}>
          <Image src={imagen4} layout="fill" placeholder="blur" />
        </div>

        {/* utilizando un cargador personalizado de dicha url */}
        {/* https://notife.com/wp-content/uploads/2015/02/pappo.jpg */}
        {/* quality lleva un valor entre 1 y 100 */}
        {/* priority={true} quiere decir que no va a utilizar lazy-loading y se va a precargar mucho antes */}
        <Image
          loader={myLoader}
          src="pappo.jpg"
          width={5184 / 10}
          height={3888 / 10}
          quality={80}
          priority={true}
        />

        <div style={{ display: "flex" }}>
          <div style={{ display: "block", width: 600 }}>
            <Image
              src="/images/1.jpg"
              width={5184 / 10}
              height={3888 / 10}
              layout="responsive"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
