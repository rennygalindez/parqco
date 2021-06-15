import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useRates } from '../../hooks';
import { modal_container, modal_back } from './ModalRates.module.css';
import Vehicle from '../Vehicle/Vehicle';

const ModalRates = ({ carList, setOpen }) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add(modal_back);
  const { data, isLoading } = useRates(carList);

  useEffect(() => {
    document.body.appendChild(modalContainer);
    return () => {
      modalContainer.remove();
    };
  }, [carList, modalContainer]);
  if (isLoading) return <h2>Loading...</h2>;
  return ReactDOM.createPortal(
    <CarListWithRate setOpen={setOpen} data={data} />,
    modalContainer,
  );
};

const CarListWithRate = ({ data, setOpen }) => {
  const { vehiclesWithRates } = data;
  return (
    <div
      style={{ color: 'white', padding: '10px' }}
      className={modal_container}
    >
      <h2>Lista de Vehiculos con Tarifa</h2>
      {vehiclesWithRates.map((vehicle) => (
        <Vehicle vehicleData={vehicle} />
      ))}
      <button
        onClick={() => {
          setOpen((open) => !open);
        }}
        className="btn btn-danger btn-sm"
      >
        Cerrar
      </button>
    </div>
  );
};

export default ModalRates;
