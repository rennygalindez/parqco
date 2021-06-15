import { useState } from 'react';

import { useVehicles } from '../../hooks';
import ModalRates from '../ModalRates/ModalRates';
import Vehicle from '../Vehicle/Vehicle';

const Vehicles = () => {
  const { data, isLoading } = useVehicles();

  const [open, setOpen] = useState(false);
  if (isLoading) return <h1>loading...</h1>;
  return (
    <>
      <div>
        {data.vehicles.map((vehicle) => (
          <Vehicle vehicleData={vehicle} />
        ))}
      </div>
      <button
        className=" btn btn-primary btn-sm "
        onClick={() => setOpen(!open)}
      >
        Pedir Tarifas
      </button>
      {open && (
        <ModalRates setOpen={setOpen} carList={data.vehicles}></ModalRates>
      )}
    </>
  );
};

export default Vehicles;
