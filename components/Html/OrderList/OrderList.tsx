import { IoClose } from "react-icons/io5";
import s from "./orderlist.module.scss";

type Props = {
  isOrderHistoryShow: boolean;
  setIsOrderHistoryShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOrderTrackShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderList: React.FC<Props> = ({
  isOrderHistoryShow,
  setIsOrderHistoryShow,
  setIsOrderTrackShow,
}) => {
  //FUNCTIONS
  const handleClose = () => {
    setIsOrderHistoryShow(false);
  };
  const handleTrackPopup = () => {
    setIsOrderTrackShow(true);
  };

  return (
    <div data-active={isOrderHistoryShow} className={s.main}>
      <div data-active={isOrderHistoryShow} className={s.container}>
        <button
          data-active={isOrderHistoryShow}
          onClick={handleClose}
          className={s.close}
        >
          <IoClose />
        </button>
        <h1>Order History</h1>
        <div className={s.scroller}>
          <table data-active={isOrderHistoryShow}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((e, i) => {
                return (
                  <tr key={i}>
                    <td>RAMESSES ll</td>
                    <td>#940539</td>
                    <td>12-12-2001</td>
                    <td>$ 450</td>
                    <td>Progress</td>
                    <td>
                      <button className={s.button}>Cancel</button>
                      <button onClick={handleTrackPopup} className={s.button}>
                        Tracking
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
