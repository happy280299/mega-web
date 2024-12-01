import { useState } from "react";
import { InputContact } from "../styled";

const InputForm = ({ text }: any) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputContact>
      <label className="input-label" data-is-focused={isFocus}>
        {text}
      </label>
      <input
        type="text"
        className="input"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <span className="error"></span>
    </InputContact>
  );
};

export default InputForm;
