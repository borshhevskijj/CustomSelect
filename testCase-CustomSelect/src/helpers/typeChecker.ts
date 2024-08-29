import { OptionType } from "../types";

function isKeyValuePairOfOption(option: OptionType){
  return option && typeof option === 'object' && 'label' in option && 'value' in option;
}

 const optionTypeChecker = (option: OptionType) => {
    if (typeof option === "string") {
      return option;
    } 
    else if(isKeyValuePairOfOption(option)) {
      return option.label
    }
    return option
  };
  export const checkedOption = optionTypeChecker;