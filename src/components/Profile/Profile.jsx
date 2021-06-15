import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Profile = () => {
  const history = useHistory();
  const handleOnClick = async (event) => {
    await Auth.signOut();
    history.push('/');
  };
  const [user, setUser] = useState({});
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      setUser({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <button className="btn btn-danger btn-sm" onClick={handleOnClick}>
        Cerrar sesion
      </button>
    </div>
  );
};

export default withAuthenticator(Profile);
