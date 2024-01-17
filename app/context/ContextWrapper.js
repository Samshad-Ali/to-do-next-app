'use client'
import { useState } from 'react'
import { appContext } from './appContext';

const ContextWrapper = ({children}) => {
    const [isDeletePopPup, setIsDeletePopPup] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [isDone,setIsDone] = useState(false)
    const isTaskAvailable = JSON.parse(localStorage.getItem('task'));
    const [taskList, setTaskList] = useState(isTaskAvailable?isTaskAvailable:[]);
  return (
<appContext.Provider
value={{
    isDeletePopPup,setIsDeletePopPup,
    taskList,setTaskList,
    isEdit,setIsEdit,
    isDone,setIsDone
}}
>
{children}
</appContext.Provider>
    
  )
}

export default ContextWrapper