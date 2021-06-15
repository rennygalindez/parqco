import { useQuery } from 'react-query';
import { API } from 'aws-amplify';

async function getRates({ queryKey }) {
  let [queryName, data] = queryKey;
  const vehiclesWithRates = await API.post('parqApi', '/vehicles', {
    body: { vehicles: data },
  });
  return vehiclesWithRates;
}

export default function useRates(carsList) {
  return useQuery(['rates', carsList], getRates);
}
