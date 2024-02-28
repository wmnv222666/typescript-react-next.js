import { MouseEventHandler } from "react";

export interface CarProps {
  // city_mpg: number;
  // class: string;
  // combination_mpg: number;
  // cylinders: number;
  // displacement: number;
  // drive: string;
  // fuel_type: string;
  // highway_mpg: number;
  // make: string;
  // model: string;
  // transmission: string;
  // year: number;
  strCategory: string;
  dateModified: Date | string;
  strMeasure1: string;
  strCreativeCommonsConfirmed: "Yes" | "No";
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  car: string;
  // model: string;
  // make: string;
  // mpg: number;
  // transmission: string;
  // year: number;
  // drive: string;
  // cityMPG: number;
  strCategory: string;
  dateModified: Date | string;
  strMeasure1: string;
  strCreativeCommonsConfirmed: "Yes" | "No";
}
//? attribute is optional
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;//Indicates that the function does not return a value


}
