import React, { useState } from "react";
import { SelectProps, OptionType } from "../../types/index";
import CustomOptions from "../CustomOptions/CustomOptions";
import { CustomInput } from "../CustomInput/CustomInput";
import "./customSelect.css";

export const CustomSelect: React.FC<SelectProps> = ({
  options,
  mode = "single",
  placeholder = "Placeholder",
  customDropdown: CustomDropdown,
  customLabel: CustomLabel,
  onOptionCreate,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const [search, setSearch] = useState("");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isUnmounting, setIsUnmounting] = useState(false);

  const findOption = (option: OptionType) => {
    return options.find((item) => {
      const isEqual =
        typeof item === "string"
          ? item === option
          : item.value ===
            (
              option as {
                label: string;
                value: string;
              }
            ).value;
      return isEqual;
    });
  };
  const handleSelect = (option: OptionType) => {
    if (mode === "single") {
      setSelectedOptions([option]);
      if (onChange) {
        onChange(option);
        setSearch("");
        setIsOptionsVisible(false);
      }
    } else {
      if (!selectedOptions.find((item) => item.value === option.value)) {
        setSelectedOptions((prev) => [...prev, option]);
        setSearch("");
      }
      if (onChange) {
        onChange([...selectedOptions, option]);
      }
    }
  };

  const handleRemove = (option: OptionType) => {
    const updatedOptions = selectedOptions.filter((opt) => opt !== option);
    setSelectedOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!isOptionsVisible) {
      setIsOptionsVisible(true);
    }
  };
  const closeDropdown = () => {
    if (isOptionsVisible) {
      setIsUnmounting(true);
      setTimeout(() => {
        setIsOptionsVisible(false);
        setIsUnmounting(false);
      }, 150); // Длительность анимации должна совпадать с CSS-анимацией
    } else {
      setIsOptionsVisible(true);
    }
  };
  const toggleVisibility = () => {
    closeDropdown();
    setSearch("");
  };
  return (
    <div className="custom-select">
      <CustomInput
        CustomLabel={CustomLabel}
        handleRemove={handleRemove}
        handleSearch={handleSearch}
        onInputClick={toggleVisibility}
        search={search}
        placeholder={placeholder}
        selectedOptions={selectedOptions}
      />
      {isOptionsVisible && (
        <CustomOptions
          handleCreateOption={onOptionCreate}
          handleRemove={handleRemove}
          isUnmounting={isUnmounting}
          closeDropdown={closeDropdown}
          handleSelect={handleSelect}
          options={options}
          search={search}
          selectedOptions={selectedOptions}
          CustomDropdown={CustomDropdown}
        />
      )}
    </div>
  );
};
