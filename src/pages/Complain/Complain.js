import React from 'react'

const Complain = () => {
    return (<>

        <h2 className="text-3xl">Complain Title</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla nam quia suscipit voluptas assumenda soluta ad at, atque beatae alias velit aliquid tenetur rem quos, esse itaque pariatur repellendus</p>

        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">All Comments</h2>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex">
                <div className="w-1/2">
                    <p className="text-gray-700 text-sm">
                        <span className="font-bold">John Doe</span>
                        <span className="text-gray-500"> - </span>
                        <span className="text-gray-500">
                            <time datetime="2020-01-01">Jan 1, 2020</time>
                        </span>
                    </p>
                </div>

            </div>
            <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla nam quia suscipit voluptas assumenda soluta ad at, atque beatae alias velit aliquid tenetur rem quos, esse itaque pariatur repellendus
            </p>
        </div>




        <form className="w-full bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-col -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                </div>
                <div className="w-full md:w-full flex items-start md:w-full px-3">
                    <div className="-mr-1">
                        <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                    </div>
                </div>
            </div>
        </form>

    </>
    )
}

export default Complain