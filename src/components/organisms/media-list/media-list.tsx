import { ComponentProps } from "react";
import styles from "./media-list.module.css";
import Card from "components/molecules/card";
import { Media } from "hooks/api/types";

export interface MediaListProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  mediaList: Media[];
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
