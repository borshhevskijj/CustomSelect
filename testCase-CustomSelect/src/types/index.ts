
type SelectMode = "single" | "multiple"

export interface SelectProps {
        /** Массив опций, доступных для выбора: либо string[] или { label: string; value: string }[] */  
    options: OptionType[];
        /** Режим выбора: "single" | "multiple" */
    mode?: SelectMode;
        /** Кастомный компонент для отображения выпадающего списка опций */
    customDropdown?:CustomDropdown;
        /** Кастомный компонент для отображения выбраной опции */
    customLabel?: CustomLabel;
        /** Обработчик для создания новой опции, если её нет в списке */
    onOptionCreate?: onOptionCreate
        /** Обработчик для изменения выбранных опций */
    onChange?: (selected: OptionType | OptionType[]) => void;
        /** Текст-заполнитель для поля ввода */
    placeholder?: string
}
export type onOptionCreate = (input: string) => void;
export type KeyValuePairOfOption = { label: string; value: string }
export type OptionType = string | KeyValuePairOfOption;

export type CustomDropdown =  React.ComponentType<DropDownProps>;
  interface DropDownProps{
        options: OptionType[];
        selectedOptions: OptionType[];
        onSelect: onSelect
        onRemove: onRemove
  }

  export type onSelect = (option: OptionType) => void
  export type onRemove = (option: OptionType) => void

  export type CustomLabel= React.ComponentType<LabelProps>;
interface LabelProps{
     option: OptionType; onRemove: () => void 
}