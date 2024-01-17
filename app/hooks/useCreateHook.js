'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formYupSchema";
import { useContext, useEffect } from "react";
import { appContext } from "../context/appContext";
import { useParams, useRouter } from "next/navigation";
import { routes } from "../utils/routes";

const useCreateHook = () => {
  const router = useRouter();
  const params = useParams();
  const {taskList,setTaskList,setIsEdit} =  useContext(appContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    const {title,description} = data;
    if(params?.id){
      // 1st method--------
      // const updatedTask = taskList.map((item)=>{
      //   if(item.id==params?.id){
      //     return {...item,title:title,description:description}
      //   }
      //   return item;
      // })
      // setTaskList(updatedTask)
      // 2nd method-------
      const isTask = taskList.findIndex(item=>item.id==params?.id);
      if(isTask !== -1){
        let newTaskList = [...taskList];
        newTaskList[isTask].title=title;
        newTaskList[isTask].description=description;
        setTaskList(newTaskList)
      }
      router.push(routes.home)
    }else{
      const id = new Date().getTime().toString();
      const date = new Date().toDateString();
      setTaskList([...taskList,{title,description,id,date,isDone:false}])
      router.push(routes.home)
      setIsEdit(false)
    }
  };
  useEffect(()=>{
    if(params?.id){
      const isTask = taskList.find(data=>data.id==params?.id)
      setValue('title',isTask.title);
      setValue('description',isTask.description);
    }
  },[params?.id])
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,    
  };
};

export default useCreateHook;
