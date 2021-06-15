import { useQuery } from 'react-query';
import { API } from 'aws-amplify';

function getVehicles() {
  return API.get('parqApi', '/vehicles');
}

function useVehicles() {
  return useQuery('vehicles', getVehicles);
}

export default useVehicles;
