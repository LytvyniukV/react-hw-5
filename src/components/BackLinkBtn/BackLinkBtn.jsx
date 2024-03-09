import { FaArrowLeft } from 'react-icons/fa6';
import css from './BackLinkBtn.module.css';
export default function BackLinkbtn() {
  return (
    <button className={css.btn} type="button">
      <FaArrowLeft size={15} color="white" />
      Click to go Back
    </button>
  );
}
