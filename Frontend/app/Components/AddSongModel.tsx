import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddSongSchema } from "../validations/addSong.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";

type AddSongSchemaType = z.infer<typeof AddSongSchema>;
function AddSongModel({
  setShowAddSong,
}: {
  setShowAddSong: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const pathName =
      usePathname().split("/")[usePathname().split("/").length - 1];
    console.log("My PathName again ", pathName);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddSongSchema),
    mode: "onChange",
  });

  const handleAddSong = ({ title, url }: AddSongSchemaType) => {
    console.log("Add Songs Data", title, url);
  };

  return (
    <div className="h-[33vh] w-[30vw] bg-gray-900 relative ">
      <button
        className="absolute top-3 right-4 text-xl cursor-pointer"
        onClick={() => setShowAddSong(false)}
      >
        X
      </button>

      <form className=" p-8 w-full" onSubmit={handleSubmit(handleAddSong)}>
        <div className="flex items-start flex-col gap-5 w-full">
          <div className="w-full">
            <label className="text-md text-white">Song Title</label>
            <input
              {...register("title")}
              className="w-full h-10 rounded px-3 mt-2 bg-[#121212] text-sm text-white border border-gray-600 focus:outline-none focus:border-gray-300"
            />
            {errors.title?.message && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="text-md text-white">Song Url</label>
            <input
              {...register("url")}
              className="w-full h-10 rounded px-3 mt-2 bg-[#121212] text-sm text-white border border-gray-600 focus:outline-none focus:border-gray-300"
            />
            {errors.url?.message && (
              <p className="text-sm text-red-500">{errors.url.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md px-5 cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSongModel;
