import { IoClose } from "react-icons/io5";
import s from "./productdetail.module.scss";
import { checkout } from "@/checkout";
import { useSnapshot } from "valtio";
import { store } from "@/store";

const ProductDetail = () => {
  const {
    shoeDetailPopupIsActive,
    shoeDetail,
    shoeRotateRight,
    shoeRotateLeft,
  } = useSnapshot(store);

  const handleClick = () => {
    checkout({
      lineItems: [
        {
          price: "price_1MyTRcL3nKF4Bf9hmZMbXPJ2",
          quantity: 1,
        },
      ],
    });
  };

  const handleClose = () => {
    store.shoeDetailPopupIsActive = false;
    store.shoeCameraDefault = false;
  };

  return (
    <>
      <div data-active={shoeDetailPopupIsActive} className={s.rotate}>
        <button onClick={shoeRotateLeft}>{"<"}</button>
        <button onClick={shoeRotateRight}>{">"}</button>
      </div>
      <div data-active={shoeDetailPopupIsActive} className={s.main}>
        <div onClick={handleClose} className={s.main_icon}>
          <IoClose />
        </div>
        <div className={s.main_heading}>
          <h1>{shoeDetail.heading}</h1>
          <h2>{shoeDetail.subheading}</h2>
        </div>
        <ul>
          {shoeDetail.detail.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
        <div className={s.main_box}>
          <button onClick={handleClick}>Buy Now</button>
          <h2>&euro;{shoeDetail.price}</h2>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
