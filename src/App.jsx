
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';



function App() {
const coffees = useLoaderData();
  return (
    <div className='m-10 md:m-20'>
      <h1 className='text-5xl text-center font-bold text-red-500'>Coffee : <span className='text-violet-800'>{coffees.length}</span></h1>
    <div className='grid md:grid-cols-2 gap-4 mt-48'>
    {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        />)
      }
    </div>
    </div>
  )
}

export default App
