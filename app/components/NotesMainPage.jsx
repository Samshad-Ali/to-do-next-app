'use client';
import React, { useContext, useEffect } from 'react'
import { appContext } from '../context/appContext';
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import { routes } from '../utils/routes';
import SingleTaskCard from './SingleTaskCard';
import useMainPageHook from '../hooks/useMainPageHook';

function NotesMainPage() {
  const {taskList} = useContext(appContext);
  const {handleSearch,searchValue} = useMainPageHook();
  return (
    <main className="flex flex-col gap-8 min-h-screen justify-center items-center p-4 lg:p-0">
      <div className='border p-2 flex items-center bg-white rounded-full'>
        <span className='text-3xl text-black grid place-items-center'>
        <IoSearch/>
        </span>
      <input
      onChange={handleSearch}
      className=' rounded-sm p-2 flex-1 placeholder:font-semibold text-black font-semibold outline-none'
       type="search" placeholder='Search Your Task' />
      </div>
    <Link href={routes.create} className='p-4 bg-green-500 text-black font-semibold rounded-sm' >Click here add your task</Link>
    {
        taskList.length>0?
        taskList?.filter(task=>task.title.includes(searchValue)).map((data,i)=>{
            return <SingleTaskCard  key={i} task={data} />
        })
        : <p className='bg-red-500 text-black p-3 px-4 font-semibold rounded-sm shadow-sm shadow-white'>No Tast Found ! Create some Task</p>
    }
  </main>
  )
}

export default NotesMainPage