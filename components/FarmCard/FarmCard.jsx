import React from "react";
import { daysLeft } from '../../utils/index';
// import { thirdweb, tagType } from '../assets'
import { CropData } from '../../utils/data'
import Image from 'next/image'
import Button from "../../components/Dashboard/components/Button";


function FundCard({ cropCategory, cropName, cropPrice, datePlanted, dailyInterestRate,handleSubmit,product }) {
    const remainingDays = daysLeft(datePlanted)
     console.log(CropData[0].imageSrc)
    return (
        <div className='sm:w-[288px] w-full rounded-[15px] shadow-2xl  cursor-pointer'>
         <Image src={CropData[5].imageSrc}/>
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center mb-[13px]">
                    <p className="ml-[12px] mt-[2px] font-epilogue font-bold  text-[16px] "> {cropCategory} </p>
                </div>

                <div className="block">
                    <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{cropName}</h3>
                    <p className="mt-[5px] font-epilogue font-normal  text-left leading-[18px] truncate"> description</p>
                </div>

                <div className="flex justify-between flex-wrap mt-[11px] gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">{cropPrice}</h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate">Raised of {dailyInterestRate}</p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">{remainingDays}</h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px]  sm:max-w-[120px] truncate">Days Left</p>
                    </div>
                </div>

                <div className="flex items-center mt-[20px] gap-[12px]">
                    <Button
                    noIcon
                    // loading={loading}
                    title="Add to your cart"
                    width="w-full"
                   onClick={()=>{handleSubmit(product)}}
                  />


                </div>

            </div>
        </div>
    )
}

export default FundCard;
