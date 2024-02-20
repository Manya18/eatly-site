import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "../../../redux/features/slices/currentPageSlice";
import ButtonTypeHidden from "../../atoms/buttonTypeHidden/ButtonTypeHidden";
import { RootState } from "../../../redux/store";
import AbleArrow from "../../../assets/images/pages/BackArrow.svg";
import DisableArrow from "../../../assets/images/pages/ForwardArrow.svg";
import styles from "./paginationButtons.module.css";

interface LimitProps {
  limit: number;
}

const PaginationButtons: React.FC<LimitProps> = ({ limit }) => {
  const page = useSelector((state: RootState) => state.currentPage.page);
  const dispatch = useDispatch();
  const openPage = (newPage: number) => {
    dispatch(setPage(newPage));
    console.log(page);
  };

  return (
    <div className={styles.buttonGroup}>
      {page <= 0 ? (
        <ButtonTypeHidden onClick={() => openPage(page - 1)} disabled={true}>
          <img src={DisableArrow} alt="Back Arrow" loading="lazy" />
        </ButtonTypeHidden>
      ) : (
        <ButtonTypeHidden onClick={() => openPage(page - 1)}>
          <img
            src={AbleArrow}
            className={styles.reverseArrow}
            alt="Back Arrow"
            loading="lazy"
          />
        </ButtonTypeHidden>
      )}

      {page >= limit / 12 - 1 ? (
        <ButtonTypeHidden onClick={() => openPage(page + 1)} disabled={true}>
          <img
            src={DisableArrow}
            className={styles.reverseArrow}
            alt="Forward Arrow"
            loading="lazy"
          />
        </ButtonTypeHidden>
      ) : (
        <ButtonTypeHidden onClick={() => openPage(page + 1)}>
          <img src={AbleArrow} alt="Forward Arrow" loading="lazy" />
        </ButtonTypeHidden>
      )}
    </div>
  );
};

export default PaginationButtons;
