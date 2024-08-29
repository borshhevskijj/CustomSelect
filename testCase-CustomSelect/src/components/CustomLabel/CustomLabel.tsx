import React from "react";
import { OptionType, CustomLabel as CustomLabelType, onRemove } from "../../types";
import "../CustomInput/customInput.css";
import deleteIcon from "../../assets/icons/crossDelete.svg";

interface CustomLabelProps {
  selectedOptions: OptionType[];
  handleRemove: onRemove;
  CustomLabelComponent?: CustomLabelType;
}

export const CustomLabel: React.FC<CustomLabelProps> = ({ selectedOptions, handleRemove, CustomLabelComponent }) => {
  const clickHandler = (e: React.MouseEvent, option: OptionType) => {
    e.stopPropagation();
    handleRemove(option);
  };

  return (
    <>
      {selectedOptions.map((option, index) =>
        CustomLabelComponent ? (
          <CustomLabelComponent key={index} option={option} onRemove={() => handleRemove(option)} />
        ) : (
          <span className="selected-option" key={index}>
            {typeof option === "string" ? option : option.label}
            <div onClick={(e) => clickHandler(e, option)}>
              <img src={deleteIcon} />
            </div>
          </span>
        )
      )}
    </>
  );
};
