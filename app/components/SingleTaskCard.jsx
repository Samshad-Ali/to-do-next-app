'use client'
import { MdDelete, MdEditDocument, MdCheckBox } from "react-icons/md";
import useMainPageHook from "../hooks/useMainPageHook";
import { routes } from "../utils/routes";
import Link from 'next/link'
import { useContext } from "react";
import { appContext } from "../context/appContext";
const SingleTaskCard = ({task}) => {
  const {date,id,data,isDone,title,description} = task;
  const {handleEditBtn,handleDeleteBtn,handleCompleteBtn} = useMainPageHook();
  return (
    <div 
    className={` ${isDone?'opacity-30':'bg-opacity-100'} relative w-full lg:w-1/3 min-h-40 bg-gray-900 text-black p-8 rounded-sm shadow-sm shadow-gray-800 flex gap-2 items-center justify-between`}>
      <div className="flex flex-col gap-1">
        <h1 className={`${isDone?'line-through':'no-underline'} text-2xl font-bold text-white tracking-wide`}>{title}</h1>
        <p className={` ${isDone?'line-through':'no-underline'} text-lg font-semibold text-gray-100 tracking-wide `}>
         {description}
        </p>
      </div>
      <div className="flex gap-4">
        <Link
        href={`${routes.edit}/${id}`}
        onClick={()=>handleEditBtn(id)}
        className='bg-white text-cyan-500 p-2 rounded-sm text-2xl hover:bg-cyan-500 hover:text-white transition-all '>
          <MdEditDocument/>
        </Link>
        <button
         onClick={()=>handleDeleteBtn(id)}  
         className="bg-white text-red-500 p-2 rounded-sm text-2xl  hover:bg-red-500 hover:text-white transition-all">
          <MdDelete />
        </button>
        <button
        onClick={()=>handleCompleteBtn(id)}
        className={`${isDone?'bg-yellow-500 text-white':'bg-white text-yellow-500'} p-2 rounded-sm text-2xl transition-all`}>
          <MdCheckBox />
        </button>
      </div>
      <div className="absolute bottom-1 right-2 text-gray-500 text-sm">
        <span> {date} </span>
      </div>
    </div>
  );
};

export default SingleTaskCard;
