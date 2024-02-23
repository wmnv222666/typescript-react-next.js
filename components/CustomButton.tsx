import React from 'react'
import Image from "next/image";
import { CustomButtonProps } from '@/types';


const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        // containerStyles is in hero(css set up) 
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        // onChange={()=>{}}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && ( // {rightIcon && (...)}这是一个条件渲染部分，当 rightIcon 存在时才会渲染后面的内容
            //如果你不使用rigticon那就不需要渲染  只是在hero父组件中写img
            <div className="relative w-6 h-6">
                <Image
                    src={rightIcon}
                    alt="arrow_left"
                    fill
                    className="object-contain"
                />
            </div>
        )}
    </button>
);

export default CustomButton