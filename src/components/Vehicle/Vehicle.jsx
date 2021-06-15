const Vehicle = ({ vehicleData }) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid gray 1px',
    borderRadius: '8px',
    marginBottom: '5px',
  };

  return (
    <div style={styles} key={vehicleData.id}>
      <h5> Placa: {vehicleData.placa}</h5>
      <ul>
        <li>Tipo: {vehicleData.tipo}</li>
        {vehicleData.tarifa && <li> Tarifa:{vehicleData.tarifa} </li>}
      </ul>
    </div>
  );
};

export default Vehicle;
