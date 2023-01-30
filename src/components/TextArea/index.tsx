import React from "react";
import styles from "./index.module.scss";

export type TextareaProps = {
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  maxLength?: number;
};

export const TextArea = ({ value, name, placeholder, onChange, error, maxLength }: TextareaProps) => {
  return (
    <textarea
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      className={styles.textarea}
    />
  );
};
