import styles from "./styles.module.css";

function Home() {
  const imgSrc =
    "https://img.freepik.com/free-vector/flat-construction-sign-background_23-2148181057.jpg?t=st=1727195138~exp=1727198738~hmac=d34a3f66d509cc3ec7f5d1fbce32e826fd8dc66fd8e17bc5bd5f4331ecfd9ec0&w=826";

  return (
    <div className={styles.container}>
      <main className={styles["page-content"]}>
        <div className={styles["grid-text-box"]}>
          <h1 className={styles.title}>Página em construção</h1>
          <p className={styles.text}>Um dia eu mudo isso aqui.</p>
        </div>
        <img src={imgSrc} className={styles.img} />
      </main>
    </div>
  );
}

export default Home;
