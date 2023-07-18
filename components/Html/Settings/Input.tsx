import { BiSolidEditAlt } from "react-icons/bi";
import s from "./settings.module.scss";
import { FaSave } from "react-icons/fa";
import { useRef, useState } from "react";

type Props = {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  inputType: React.HTMLInputTypeAttribute | undefined;
  value: string;
  name: string;
  label: string;
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  handleChange,
  value,
  name,
  label,
  inputType,
  disabled = false,
}) => {
  //REFERENCES
  const inputRef = useRef<HTMLInputElement>(null);

  //STATES
  const [isEdit, setIsEdit] = useState<boolean>(false);

  //FUNCTIONS
  const handleClick = () => {
    setIsEdit((prev) => !prev);
    if (!isEdit) {
      inputRef.current!.disabled = false;
      inputRef.current?.focus();
    } else {
      inputRef.current!.disabled = true;
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className={s.form_input}>
        <input
          ref={inputRef}
          type={inputType}
          id={name}
          name={name}
          disabled
          onChange={handleChange}
          value={value}
          data-edit={isEdit}
          onKeyDown={handleEnterKey}
        />
        <button disabled={disabled} type="button" onClick={handleClick}>
          {isEdit ? <FaSave /> : <BiSolidEditAlt />}
        </button>
      </div>
    </>
  );
};

export default Input;
