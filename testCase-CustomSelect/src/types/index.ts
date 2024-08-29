
type SelectMode = "single" | "multiple"

export interface SelectProps {
    options: OptionType[];
    mode?: SelectMode;
    customDropdown?:CustomDropdown;
    customLabel?: CustomLabel;
    onOptionCreate?: (input: string) => void;
    onChange?: (selected: OptionType | OptionType[]) => void;
    placeholder?: string
}

// export type OptionType = string 
export type OptionType = string | { label: string; value: string };
// export type OptionType = { label: string; value: string };

export type CustomDropdown =  React.ComponentType<DropDownProps>;
  interface DropDownProps{
        options: OptionType[];
        selectedOptions: OptionType[];
        onSelect: (option: OptionType) => void;
  }

  export type CustomLabel= React.ComponentType<LabelProps>;
interface LabelProps{
     option: OptionType; onRemove: () => void 
}