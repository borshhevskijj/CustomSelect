import React from "react";
import { CustomDropdown, OptionType } from "../../types/index";
import OptionsItem from "./OptionsItem";
import "./optionsDropdown.css";
import { AddOption } from "./AddOption/AddOption";
interface CustomOptionsProps {
  CustomDropdown?: CustomDropdown;
  options: OptionType[];
  selectedOptions: OptionType[];
  handleSelect: (option: OptionType) => void;
  search: string;
  closeDropdown: () => void;
  isUnmounting: boolean;
  handleRemove: (option: OptionType) => void;
  handleCreateOption: ((input: string) => void) | undefined;
}

const CustomOptions: React.FC<CustomOptionsProps> = ({
  options,
  CustomDropdown,
  selectedOptions,
  handleSelect,
  search,
  closeDropdown,
  isUnmounting,
  handleRemove,
  handleCreateOption,
}) => {
  const selectedOptionsLabels = options.filter((option) => selectedOptions.includes(option));
  const filterOptionsBySearch = options.filter((option) => option.label.includes(search));
  return (
    <>
      <div className={`options-dropdown ${isUnmounting ? "closing" : ""}`}>
        {CustomDropdown ? (
          <CustomDropdown options={options} selectedOptions={selectedOptions} onSelect={handleSelect} />
        ) : (
          <ul>
            {filterOptionsBySearch.length ? (
              filterOptionsBySearch.map((option, index) => {
                const isSelected = selectedOptionsLabels.includes(option);
                return (
                  <OptionsItem
                    handleRemove={handleRemove}
                    isSelected={isSelected}
                    key={index}
                    option={option}
                    handleSelect={handleSelect}
                  />
                );
              })
            ) : handleCreateOption ? (
              <AddOption handleCreateOption={handleCreateOption} search={search} />
            ) : (
              <li className="option">No data 😞😞😞</li>
            )}
          </ul>
        )}
        <div className="close-dropdown-area" onClick={closeDropdown} />
      </div>
    </>
  );
};

export default CustomOptions;
