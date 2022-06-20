import React, { useState } from "react";
import arrowDownImg from "../designs/arrow-down.png";

const CustomSelect = ({ id, show, args, taskSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`custom-select ${isOpen ? "active" : ""}`}
        id={id}
        onClick={handleOpenSelect}
      >
        {args.map((arg, i) => (
          <div key={i}>
            <div className="select-value">
              <label htmlFor={arg.optionName}>{arg.selectLabel}</label>
              <input
                type="text"
                id={arg.optionName}
                name={arg.optionName}
                value={show}
                readOnly
              />
              <img src={arrowDownImg} alt="" />
            </div>
            <div className="select-options">
              {arg.options.map((option, j) => (
                <div className="option" key={j}>
                  <input
                    type="radio"
                    name={arg.optionName}
                    id={option.idValue}
                    value={option.idValue}
                    hidden
                    onClick={(e) => {
                      taskSelect(e, option.optionLabel);
                    }}
                  />
                  <label htmlFor={option.idValue}>
                    <div>{option.optionLabel}</div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomSelect;
