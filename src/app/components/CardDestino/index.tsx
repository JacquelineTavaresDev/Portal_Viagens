import Link from "next/link";
import Image from "next/image";
import styles from "./CardDestino.module.css";

type Props = {
  id: string;
  nome: string;
  imagem: string;
};

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <Link href={`/destinos/${id}`} className={styles.card}>
      <div className={styles.imagemWrapper}>
        <Image
          src={imagem}
          alt={nome}
          fill
          className={styles.imagem}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className={styles.titulo}>{nome}</h3>
    </Link>
  );
};
