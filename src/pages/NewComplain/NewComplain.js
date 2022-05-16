import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import myAxios from '../../utils/myAxios';

const NewComplain = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const payload = {
            title: data.title,
            suspect: data.suspect,
            details: data.details,
            attachments: data.attachments[ '0' ],
            status: "new"
        }
        // console.log(payload);
        myAxios.post('/api/complain/', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            // console.log(res);
            navigate("/complains");
        }).catch(err => {
            console.log(err.response.data);
        })
    }
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm">
                <h1 className="text-4xl font-semibold text-center p-4">New Complain</h1>
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
                            htmlFor="against"
                        >
                            Against
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="against"
                            type="text"
                            {...register('against', { required: true })}
                        />
                        {errors.against && <p className="text-red-500 text-xs italic">Title is required</p>}
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
                        {errors.details && <p className="text-red-500 text-xs italic">Title is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="attachments"
                        >
                            Attachments
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="attachments"
                            type="file"
                            {...register('attachments')}
                        />
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

export default NewComplain