import { useState } from 'react';

export default function FurnitureCard({ title, img, invert = 'none', color }) {
  return (
    <div className={`flex flex-col items-center border-solid border-[1px] border-[#D9DCE5] py-6 px-12 bg-[${invert}]`}>
      <img src={img} alt="cool" />
      <h3 className={`${color} tablet:text-[10px] text-center leading-tight` }>{title}</h3>
    </div>
  );
}
