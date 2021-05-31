import React, { useState } from "react";

import cn from "classnames";

import styles from "./Select.module.css";

interface SelectProps {
  label?: string;
  value: string;
  options: { name: string; id: number | string }[];
  selectChange: (value: string, id: number | string) => void;
}

const Select = ({ label, value, options, selectChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(styles.select, isOpen ? styles.open : "")} onClick={() => setIsOpen(!isOpen)}>
      <span>{label}</span>
      <div>
        <span>{value}</span>
        {options.length > 0 && (
          <>
            {isOpen && <div />}
            <ul>
              {options.map((el, nid) => (
                <li
                  key={nid}
                  onClick={() => selectChange(el.name, el.id)}
                  className={el.name === value ? "font-bold" : ""}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Select;
