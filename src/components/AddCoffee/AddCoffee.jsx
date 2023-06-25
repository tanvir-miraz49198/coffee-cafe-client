import Swal from 'sweetalert2'
const AddCoffee = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photoUrl}
        console.log(newCoffee)

        // send to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    }


    return (
        <div className="bg-slate-200">
            <h2>Add a Coffee</h2>


            {/* form section */}

            <div className="bg-stone-400 m-8 rounded-md py-4">
                <form className="max-w-xl mx-auto p-4 " onSubmit={handleSubmit}>

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

                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="md:w-full bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"

                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddCoffee;