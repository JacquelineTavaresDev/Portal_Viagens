import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.home}>
      <h2>Bem-vindo ao Portal de Viagens</h2>
      <p>Descubra destinos incríveis ao redor do mundo.</p>
      <Link href="/destinos" className={styles.link}>
        Ver Destinos
      </Link>
    </section>
  );
};
