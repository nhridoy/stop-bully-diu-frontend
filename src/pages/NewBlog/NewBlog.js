import React from 'react'
import { useForm } from 'react-hook-form';
import myAxios from '../../utils/myAxios';

const NewBlog = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const payload = {
            blogtitle: data.title,
            blogcontent: data.details,
            blogimg: data.image['0'],
        }
        console.log(payload);
        myAxios.post('/api/post/', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response.data);
        })
    }
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm">
                <h1 className="text-4xl font-semibold text-center p-4">New Blog</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            {...register('title', { required: true })}
                        />
                        {errors.title && <p className="text-red-500 text-xs italic">Title is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="image"
                        >
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            {...register('image', { required: true })}
                        />
                        {errors.image && <p className="text-red-500 text-xs italic">Image is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="details"
                        >
                            Details
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="details"
                            {...register('details', { required: true })}
                        />
                        {errors.details && <p className="text-red-500 text-xs italic">Details is required</p>}

                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewBlog