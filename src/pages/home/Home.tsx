import Header from "../../components/layout/Header";
import styles from "./home.module.css";

export default function Index() {
  return (
      <main>
        <Header/>
        <article className={styles.main}>
          <h1>Home</h1>
        </article>
      </main>
  );
}
