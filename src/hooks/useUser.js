import { Auth } from 'aws-amplify';
import { useQuery } from 'react-query';

function getCurrentUse() {
  return Auth.currentAuthenticatedUser();
}

function useUser() {
  return useQuery('currentUser', getCurrentUse, { retry: false });
}
export default useUser;
