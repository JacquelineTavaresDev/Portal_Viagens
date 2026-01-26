import Image from "next/image";
import { destinos } from "../../lib/destinos";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DestinoDetalhe({ params }: Props) {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return <h1>Destino não encontrado</h1>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>{destino.nome}</h1>

      <div className={styles.imagemWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          className={styles.imagem}
          priority
        />
      </div>

      <p className={styles.descricao}>{destino.descricao}</p>
    </main>
  );
}
