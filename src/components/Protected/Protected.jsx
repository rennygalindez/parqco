import { useEffect, useCallback } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks';

const WithAuthentication = ({ component }) => {
  const { isSuccess, isError, isLoading } = useUser();
  const history = useHistory();
  const goAway = useCallback(() => history.push('/profile'), [history]);
  useEffect(() => {
    if (isError) {
      goAway();
    }
  }, [goAway, isError]);

  return (
    <>
      {isSuccess && <Route component={component} />}
      {isLoading && <div> Verificando login</div>}
    </>
  );
};

export default WithAuthentication;
