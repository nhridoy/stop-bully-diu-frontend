import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import myAxios from '../../utils/myAxios';

const NewProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const { name, price, description, stock } = data;
        const payload = {
            "product_name": name,
            "product_price": price,
            "product_desc": description,
            "product_stock": stock
        }
        // console.log(payload);
        myAxios.post('/api/products/', payload).then(res => {
            // console.log(res);
            navigate("/products");
        }).catch(err => {
            console.log(err.response.data);
        })
    }
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm">
                <h1 className="text-4xl font-semibold text-center p-4">New Product</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="against"
                        >
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            {...register('price', { required: true })}
                        />
                        {errors.price && <p className="text-red-500 text-xs italic">Price is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="details"
                        >
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            {...register('description', { required: true })}
                        />
                        {errors.description && <p className="text-red-500 text-xs italic">Description is required</p>}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="attachments"
                        >
                            Stock
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="stock"
                            type="number"
                            {...register('stock', { required: true })}
                        />
                        {errors.stock && <p className="text-red-500 text-xs italic">Stock is required</p>}
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

export default NewProduct