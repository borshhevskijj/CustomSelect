import React from "react";
import { CustomLabel as Label } from "../CustomLabel/CustomLabel";
import { CustomLabel, OptionType } from "../../types";
import searchIcon from "../../assets/icons/search.svg";
import "./customInput.css";

interface CustomInputProps {
  handleRemove: (option: OptionType) => void;
  selectedOptions: OptionType[];
  onInputClick: () => void;
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleCreateOption: () => void;
  CustomLabel?: CustomLabel;
  placeholder: string;
}
export const CustomInput: React.FC<CustomInputProps> = ({
  CustomLabel,
  handleRemove,
  selectedOptions,
  onInputClick,
  search,
  handleSearch,
  placeholder,
  // handleCreateOption,
}) => {
  const onBackSpaceHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !search.length && selectedOptions.length) {
      handleRemove(selectedOptions[selectedOptions.length - 1]);
    }
  };

  return (
    <div onClick={onInputClick} className="input-container">
      <Label CustomLabelComponent={CustomLabel} handleRemove={handleRemove} selectedOptions={selectedOptions} />
      {!selectedOptions.length && (
        <div className="searchIconWrapper">
          <img src={searchIcon} alt="searchIcon" />
        </div>
      )}
      <input
        placeholder={selectedOptions.length ? "" : placeholder}
        onKeyDown={onBackSpaceHandler}
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
