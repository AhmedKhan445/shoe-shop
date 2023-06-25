import s from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={s.main}>
      <h2>
        Loading
        <span>.</span>
        <span style={{ "--delay": "0.8s" } as React.CSSProperties}>.</span>
        <span style={{ "--delay": "1.5s" } as React.CSSProperties}>.</span>
      </h2>
    </div>
  );
};

export default Loader;
