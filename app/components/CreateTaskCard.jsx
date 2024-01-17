'use client'
import React, { useContext } from "react";
import useCreateHook from "../hooks/useCreateHook";
import { appContext } from "../context/appContext";

const CreateTaskCard = () => {
  const { errors, register, onSubmit, handleSubmit } = useCreateHook();
  const {isEdit} = useContext(appContext);
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-5 p-4 lg:p-0">
      <h2 className="text-3xl border-b"> {isEdit?'Update Your Task':'Create Your Task'} </h2>
      <div className="w-full lg:w-1/3 bg-gray-900  p-8 rounded-sm shadow-sm shadow-gray-800">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="tracking-wide">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="p-2 outline-none bg-transparent border"
              {...register("title")}
            />
            {errors["title"] && <span className="text-red-500"> {errors["title"]?.message} </span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="tracking-wide">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="p-2 outline-none bg-transparent border"
              {...register("description")}
            />
            {errors["description"] && (
              <span className="text-red-500"> {errors["description"]?.message} </span>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-black font-semibold p-2 px-4 rounded-sm"
            >
            {isEdit? 'Update Task':'Create Task'}
            </button>
            <button
              type="reset"
              className="bg-yellow-500 text-black font-semibold p-2 px-4 rounded-sm"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskCard;
