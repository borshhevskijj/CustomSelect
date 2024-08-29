import React from "react";
import addIcon from "../../../assets/icons/add.svg";
interface props {
  search: string;
  handleCreateOption: ((input: string) => void) | undefined;
}
export const AddOption: React.FC<props> = ({ search, handleCreateOption }) => {
  const addOptionHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (handleCreateOption && search) {
      handleCreateOption(search);
    }
  };
  return (
    <li onClick={addOptionHandler} className="option add-option">
      <div className="imgWrapper">
        <img src={addIcon} alt="addIcon" />
      </div>
      <div>
        Создать <span className="bold">«{search}»</span>
      </div>
    </li>
  );
};
