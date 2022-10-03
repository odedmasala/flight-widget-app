import { useState, useEffect } from "react";
import { TableRow } from "./index";
import axios from "axios";
const TableBody = () => {
  const [flights, setFlights] = useState(null);

  const getFlights = async () => {
try{
  const { data } = await axios.get("http://localhost:8000/flights");
 const dis = Object.values(data.data)
  setFlights(dis);
}catch(e){
  // console.log(e);
}
  };

  useEffect(() => {
    getFlights();
  }, []);

  console.log(flights);
  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
