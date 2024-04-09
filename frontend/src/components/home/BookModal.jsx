import { AiOutlineClose } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextLight } from "react-icons/pi"


const BookModal = ({ book, onClose }) => {
    return (
        <div onClick={onClose} className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" >


            <div onClick={(event) => event.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative ">
                <AiOutlineClose onClick={onClose} className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer  " />


                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg ">
                    {book.publishYear}
                </h2>
                <h4 className="my-2 text-gray-500 ">
                    {book._id}
                </h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-2xl text-red-300" />
                    <h2 className="my-1"> {book.title} </h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-2xl text-red-300" />
                    <h2 className="my-1"> {book.author} </h2>
                </div>
                <p className="mt-4"> Anything you want to show</p>
                <p className="my-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ratione expedita voluptatem, doloribus autem quia quos nam, saepe illo iste tenetur numquam recusandae, officiis provident! Labore corporis modi nobis voluptatem?
                </p>


            </div>
        </div>
    )
}

export default BookModal