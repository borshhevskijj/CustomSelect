import { KeyValuePairOfOption, OptionType } from "../types";

 const optionTypeChecker = (option: OptionType) => {
    if (typeof option === "string") {
      return option;
    } else {
      return (option as KeyValuePairOfOption).label;
    }
  };
  export const checkedOption = optionTypeChecker;