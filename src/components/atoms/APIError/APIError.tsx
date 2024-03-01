import StyledSpan from "../spanTypeViolet/SpanTypeViolet";
import styles from "./APIError.module.css";

const APIError = () => {
  return (
    <div className={styles.errorMessage}>
      <h1>
        An <StyledSpan>error</StyledSpan> has occurred. Please try again later.
      </h1>
    </div>
  );
};

export default APIError;
