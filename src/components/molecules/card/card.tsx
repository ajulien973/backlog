import { ComponentProps } from "react";

import styles from "./card.module.css";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  releaseDate: string;
  subjectId: string;
  type: string;
}

const TYPES: { [key: string]: string } = {
  m: "movie",
  s: "show",
};

const Card = ({ title, releaseDate, subjectId, type }: CardProps) => {
  const imgSrc = `https://img.rgstatic.com/content/${TYPES[type]}/${subjectId}/poster-342.jpg`;
  const imgAlt = `${title} Poster`;

  const formatDate = (dateIso: string) => {
    const date = new Date(dateIso);
    return date.toDateString();
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.releaseDate}>{formatDate(releaseDate)}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
