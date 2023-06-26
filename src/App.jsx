
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';



function App() {
const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-10 md:m-20'>
      <h1 className='text-5xl text-center font-bold text-red-500'>Coffee : <span className='text-violet-800'>{loadedCoffees.length}</span></h1>
    <div className='grid md:grid-cols-2 gap-4 mt-48'>
    {
        loadedCoffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees = {coffees}
        setCoffees = {setCoffees}
        
        />)
      }
    </div>


<div className='text-center mt-8'>
  <Link to="/addCoffee">
  <button className='btn bg-zinc-600 text-white hover:bg-zinc-800'>Add Some Coffee !!</button>
  </Link>
</div>


    </div>
  )
}

export default App
