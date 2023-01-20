import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, Ref } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  ref: Ref<any>;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ errorMessage,...props }, ref) => {
  return (
    <div className={styles.body}>
      <input className={errorMessage && "error"} {...props} ref={ref} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default forwardRef(Input);
