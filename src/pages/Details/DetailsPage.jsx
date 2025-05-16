import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState([id]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error(`Car not found ${error}`);
      }
    };
    fetchCar();
  }, [id]);

  return (
    <div>
      <p>Now showing Details Page with id -{id}</p>
      <h2>
        {car.make} {car.model}
      </h2>
      <img src={car.img} alt={car.make} />
      <p>Price: {car.rentalPrice}$</p>
      <p>Type: {car.type}</p>
      <p>Address: {car.address}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default DetailsPage;
