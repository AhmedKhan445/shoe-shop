import { IoClose } from "react-icons/io5";
import s from "./orderlist.module.scss";
import { gql, useQuery } from "@apollo/client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

type Props = {
  isOrderHistoryShow: boolean;
  setIsOrderHistoryShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOrderTrackShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOrderTrackInfo: React.Dispatch<
    React.SetStateAction<{ trackingId: string; courierCompany: string }>
  >;
};

type Data = {
  id: string;
  email: string;
  productName: string;
  price: string;
  createdAt: string;
  statues: string;
  trackingId: string | null;
  courierCompany: string | null;
};

const GET_ORDER_BY_EMAIL = gql`
  query getOrderByEmail($email: String!) {
    orders(where: { email: $email }) {
      id
      email
      productName
      price
      createdAt
      statues
      trackingId
      courierCompany
    }
  }
`;

const OrderList: React.FC<Props> = ({
  isOrderHistoryShow,
  setIsOrderHistoryShow,
  setIsOrderTrackShow,
  setIsOrderTrackInfo,
}) => {
  const [user] = useAuthState(auth);

  //FUNCTIONS
  const handleClose = () => {
    setIsOrderHistoryShow(false);
  };
  const handleTrackPopup = (
    trackingId: string | null,
    courierCompany: string | null
  ) => {
    setIsOrderTrackShow(true);
    setIsOrderTrackInfo({
      trackingId: trackingId!,
      courierCompany: courierCompany!,
    });
  };

  const { loading, error, data } = useQuery(GET_ORDER_BY_EMAIL, {
    variables: {
      email: user?.email ? user.email : "",
    },
  });

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
              {loading ? (
                <div>
                  <h2>Please wait loading..</h2>
                </div>
              ) : (
                data!.orders!.map((e: Data, i: number) => {
                  return (
                    <tr key={i}>
                      <td>{e.productName}</td>
                      <td>#{e.id.slice(0, 10).toUpperCase()}</td>
                      <td>{`${new Date(e.createdAt).getUTCDate()}-${new Date(
                        e.createdAt
                      ).getUTCMonth()}-${new Date(
                        e.createdAt
                      ).getUTCFullYear()}`}</td>
                      <td>$ {e.price}</td>
                      <td>{e.statues}</td>
                      <td>
                        {/* <button className={s.button}>Cancel</button> */}
                        <button
                          disabled={e.trackingId === null}
                          onClick={() =>
                            handleTrackPopup(e.trackingId, e.courierCompany)
                          }
                          className={s.button}
                        >
                          {e.trackingId ? "Tracking" : "Processing"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
