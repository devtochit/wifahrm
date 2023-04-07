import React from 'react'

const CountBox = ({ title, value }) => {

  return (
    <div className="flex flex-col items-center w-full xs:w-[100px]">
      <h4 className="font-epilogue font-black text-[18px] text-white p-1 xs:p-3 bg-primary rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-bold text-[14px] text-white bg-[#020b01] p-1 xs:px-3 xs:py-2 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox
