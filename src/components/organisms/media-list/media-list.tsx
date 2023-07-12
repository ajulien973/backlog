import { ComponentProps } from "react";
import styles from "./media-list.module.css";
import Card from "components/molecules/card";

export interface MediaListProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  mediaList: Media[];
}

export interface Media {
  title: string;
  released_on: string;
  id: string;
  content_type: string;
}

const MediaList = ({ mediaList }: MediaListProps) => {
  return (
    <div className={styles.container}>
      {mediaList.map((props, index) => (
        <div
          key={index}
          className={styles.cardWrapper}
          style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          data-testid={"medialist-card"}
        >
          <Card
            title={props.title}
            releaseDate={props.released_on}
            subjectId={props.id}
            type={props.content_type}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaList;
