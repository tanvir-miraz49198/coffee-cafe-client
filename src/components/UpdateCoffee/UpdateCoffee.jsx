import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {



    
    const handleUpdatedCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photoUrl}
        console.log(updatedCoffee)

        // send to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    }



    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee;


    return (
        <div className="bg-slate-200">
        
        {/* form section */}

        <div className="bg-gray-500 m-8 rounded-md py-4">

        <h2 className="ml-8 text-4xl font-extrabold text-gray-800 mb-5">Add a Coffee</h2>
            <form className="max-w-xl mx-auto p-4 " onSubmit={handleUpdatedCoffee}>

                <div className="md:flex space-x-2 ">
                    <div className="mb-4 md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Coffee Name
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Coffee Name"
                            defaultValue={name}

                        />
                    </div>

                    <div className="mb-4 md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chef">
                            Available Quantity
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="quantity"
                            id="quantity"
                            placeholder="Quantity"
                            defaultValue={quantity}

                        />
                    </div>
                </div>



                <div className="md:flex space-x-2">
                    <div className="mb-4 md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplier">
                            Supplier
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="supplier"
                            id="supplier"
                            placeholder="Supplier Name"
                            defaultValue={supplier}

                        />
                    </div>

                    <div className="mb-4 md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taste">
                            Taste
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="taste"
                            id="taste"
                            placeholder="Taste"
                            defaultValue={taste}


                        />
                    </div>
                </div>




                <div className="md:flex space-x-2">

                    <div className="mb-4 md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Category"
                            defaultValue={category}
                            

                        />
                    </div>

                    <div className="mb-4 md:w-1/2 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
                            Details
                        </label>
                        <input
                            className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                            name="details"
                            id="details"
                            placeholder="Details"
                            defaultValue={details}


                        ></input>
                    </div>

                </div>

                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                        Photo URL
                    </label>
                    <input
                        className="w-full  appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="photoUrl"
                        id="photoUrl"
                        placeholder="Photo URL"
                        defaultValue={photoUrl}

                    />
                </div>

                <div className="flex justify-center">
                    <button
                        className="md:w-full bg-gray-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"

                    >
                        Update
                    </button>
                </div>
            </form>
        </div>

    </div>
    );
};

export default UpdateCoffee;