import { useState } from "react";
import s from "./screen.module.scss";
import { FaLock } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";

const GET_PASSWORD = gql`
  query getPassword {
    passwords(first: 1) {
      currentPassword
    }
  }
`;

const PasswordScreen = () => {
  const [state, setState] = useState<string>("");

  const { loading, error, data } = useQuery(GET_PASSWORD);

  return (
    <div
      data-active={
        loading
          ? state === "diajsdiXnxIOUNXoiaxojs"
          : state === data.passwords[0].currentPassword
      }
      className={s.main}
    >
      <div className={s.box}>
        <h1>
          the kings
          <br />
          v-experience
        </h1>
        <h3>wellcome to the kings v-commerce</h3>
      </div>
      <div className={s.password}>
        <FaLock />
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type="password"
          placeholder="password"
        />
      </div>
    </div>
  );
};

export default PasswordScreen;
