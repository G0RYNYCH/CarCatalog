import {cars as carsData} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import {useState} from "react";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

function Home() {
    // const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])
    const [cars, setCars] = useState(carsData)
    console.log(cars)

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ? cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                    : <p>There are no cars</p>}
            </div>
        </div>
    )
}

export default Home
