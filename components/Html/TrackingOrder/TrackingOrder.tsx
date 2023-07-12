import Link from "next/link";
import s from "./tracking.module.scss";
import { IoClose } from "react-icons/io5";

type Props = {
  isOrderTrackShow: boolean;
  setIsOrderTrackShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrackingOrder: React.FC<Props> = ({
  isOrderTrackShow,
  setIsOrderTrackShow,
}) => {
  //FUNCTIONS
  const handleClose = () => {
    setIsOrderTrackShow(false);
  };

  return (
    <div data-active={isOrderTrackShow} className={s.main}>
      <div data-active={isOrderTrackShow} className={s.container}>
        <button
          onClick={handleClose}
          data-active={isOrderTrackShow}
          className={s.close}
        >
          <IoClose />
        </button>
        <h1>Track Order</h1>

        <div data-active={isOrderTrackShow} className={s.grid}>
          <div className={s.grid_box}>
            <h3>Product</h3>
            <h3>Courier Company</h3>
            <h3>Tracking ID</h3>
            <h3>Tracking Website</h3>
          </div>
          <div className={s.grid_box}>
            <p>testing</p>
            <p>testing</p>
            <p>testing</p>
            <Link href="#">testing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingOrder;
