import styles from "./tagsGroup.module.css";

const TagsGroup = ({ props }: { props: string[] }) => {
  return (
    <div className={styles.tags}>
      {props.map((tag: string) => (
        <span key={tag}>{"#" + tag} </span>
      ))}
    </div>
  );
};

export default TagsGroup;
