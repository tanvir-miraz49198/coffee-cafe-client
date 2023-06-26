import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }


    return (
        <div>
            <div className="card card-side  shadow-xl pb-4 items-center bg-gray-100">
                <figure><img src={photoUrl} alt="Movie" /></figure>
                <div className=" flex justify-between w-full">
                    <div>
                        <h2 className="text-sm md:text-lg"><span className="font-bold">Name : </span><span className="font-semibold ">{name}</span></h2>
                        <p> <span className="font-extrabold mr-2">Quantity :</span> {quantity}</p>
                        <h1><span className="font-bold mr-2">Supplier :</span>{supplier}</h1>
                        <h1><span className="font-bold mr-2">Taste : </span>{taste}</h1>
                        <h1><span className="font-bold me-2">Category:</span>{category}</h1>
                        <h1> <span className="font-bold mr-2">Details :</span>{details}</h1>
                    </div>
                    <div className="card-actions mr-4 mt-4 items-center">
                        <div className="flex flex-col ">

                            <button className="bg-purple-400 p-2 text-2xl rounded-3xl hover:bg-purple-600">
                                <FaEye></FaEye>
                            </button>
                            <Link to={`/updateCoffee/${_id}`}>
                            <button className="bg-blue-400 p-2 text-2xl mt-2 rounded-3xl hover:bg-blue-600">
                                <FaPen></FaPen>
                            </button>
                            </Link>
                            <button className="bg-red-400 p-2 text-2xl mt-2 rounded-3xl hover:bg-red-600" onClick={() => handleDelete(_id)}>
                                <FaTrashAlt></FaTrashAlt>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;