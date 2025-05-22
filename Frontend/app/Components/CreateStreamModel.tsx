import React, { Dispatch, SetStateAction, useState } from "react";
import { z } from "zod";
import { createStreamSchema } from "../validations/createStream.validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { socket } from "../socket";
import { useAuth } from "../Context/AuthContext";
import { createStreamService } from "../service/stream.service";

function CreateStreamModel({
  setShowCreateModal,
}: {
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
}) {
  type createStreamSchemaType = z.infer<typeof createStreamSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createStreamSchemaType>({
    resolver: zodResolver(createStreamSchema),
    mode: "onChange",
  });
  const { isAuthenticated, userId } = useAuth();
  const [isLoading , setIsLoading] = useState(false)

  console.log("line 26", isAuthenticated, userId);
  const handleCreateStream = async ({ streamName }: createStreamSchemaType) => {
    
       // hit an API for create Stream with the token from localStorage :-
       setIsLoading(true)
     const isCreated = await createStreamService({streamName , socketId : socket.id!})
     setIsLoading (false)

     if (isCreated){
       setShowCreateModal(false)
     }


     



  };

  return (
    <div className="h-[33vh] w-[30vw] bg-gray-900 relative ">
      <button
        className="absolute top-3 right-4 text-xl cursor-pointer"
        onClick={() => setShowCreateModal(false)}
      >
        X
      </button>

      <form className=" p-12" onSubmit={handleSubmit(handleCreateStream)}>
        <label className="text-lg text-white">Stream Name</label>
        <input
          {...register("streamName")}
          className="w-full h-10 rounded px-3 mt-2 bg-[#121212] text-sm text-white border border-gray-600 focus:outline-none focus:border-gray-300"
        />

        {errors.streamName?.message && (
          <p className="text-red-500 text-sm">{errors.streamName?.message}</p>
        )}
        <div className="flex items-center justify-center mt-12">
          <button disabled={isLoading ? true : false} className="bg-white text-black p-2 rounded-md px-5 cursor-pointer">
            {isLoading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateStreamModel;
