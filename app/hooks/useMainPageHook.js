import { useContext, useEffect, useState } from "react"
import { appContext } from "../context/appContext"
import {toast} from 'react-hot-toast'
const useMainPageHook = () => {
    const {taskList,setTaskList,setIsEdit,setIsDone} = useContext(appContext);
    const [searchValue,setSearchValue] = useState('');
    const handleEditBtn=(id)=>{
        setIsEdit(true)
    }
    const handleDeleteBtn=(id)=>{
        // 1st method-----
        // const FilteredData = taskList.filter(data=>data.id!==id)
        // setTaskList(FilteredData)
        
        // 2nd method-----
        const isTask = taskList.findIndex(data=>data.id==id);
        if(isTask !== -1){
            let newTaskList = [...taskList];
            newTaskList.splice(isTask,1);
            setTaskList(newTaskList);
            toast.success('Tast Deleted')
        }
    }
    const handleCompleteBtn=(id)=>{
        const updatedTask = taskList.map((data)=>{
            if(data.id==id){
                return {...data,isDone:true}
            }
            return data;
        })
        setTaskList(updatedTask);
        toast.success('Tast Completed')
    }

    const handleSearch = (e) =>{
        setSearchValue(e.target.value)
    }

    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(taskList))
    },[taskList])
  return{
    handleEditBtn,
    handleDeleteBtn,
    handleCompleteBtn,
    handleSearch,
    searchValue
  }
}

export default useMainPageHook