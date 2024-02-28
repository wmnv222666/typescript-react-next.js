import React from 'react'
import Image from "next/image";
import { getSingleDrink } from '@/utils';
import { CarProps } from '@/types';

interface CarCardProps {
  car: CarProps;
}
const DrinkCard = async ({ car }: CarCardProps) => {
  // const allDrinkImg = await getSingleDrink(idDrink)
  // console.log(allDrinkImg, "allDrinkImg")
  const { strCategory,dateModified,strMeasure1,strCreativeCommonsConfirmed} = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">

      </div>
    </div>
  )
}

export default DrinkCard;