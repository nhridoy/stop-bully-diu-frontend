import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import myAxios from "../../utils/myAxios";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  let navigate = useNavigate();
  let { id } = useParams();
  const { data, isLoading, refetch } = useQuery("user", () =>
    myAxios(`user/${id}`)
  );
  if (isLoading) return <p>Loading...</p>;

  const onSubmit = (submitData) => {
    const payLoad = {
      full_name: submitData.full_name,
      student_id: submitData.student_id,
      phone_number: submitData.phone_number,
      profile_pic: submitData.profile_pic[0],
    };

    myAxios
      .patch(`user/${id}/`, payLoad, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        refetch();
        navigate("/profile");
      });
  };
  // setValue("full_name", data?.data?.full_name);
  // setValue("student_id", data?.data?.student_id);
  return (
    <div>
      <h1>Edit Profile</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            required
            placeholder={data?.data?.full_name}
            {...register("full_name", { required: true })}
          />
          {errors.full_name && (
            <p className="text-red-500 text-xs italic">Field is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Student ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            required
            placeholder={data?.data?.student_id}
            {...register("student_id", { required: true })}
          />
          {errors.student_id && (
            <p className="text-red-500 text-xs italic">Field is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Phone No.
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="number"
            required
            placeholder={data?.data?.phone_number}
            {...register("phone_number", { required: true })}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-xs italic">Field is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Profile Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="file"
            {...register("profile_pic", { required: false })}
          />
          {/* {errors.profile_pic && (
            <p className="text-red-500 text-xs italic">Field is required</p>
          )} */}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
