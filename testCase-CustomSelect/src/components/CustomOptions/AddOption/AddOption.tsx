import React from "react";
import addIcon from "../../../assets/icons/add.svg";
import { onOptionCreate } from "../../../types";
interface props {
  search: string;
  handleCreateOption: onOptionCreate;
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
