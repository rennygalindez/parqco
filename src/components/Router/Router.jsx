import { Switch, Route } from 'react-router-dom';
import { useIsFetching } from 'react-query';
import Home from '../Home/Home';
import Vehicles from '../Vehicles/Vehicles';
import Nav from '../Nav/Nav';
import Protected from '../Protected/Protected';
import Profile from '../Profile/Profile';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
const Router = () => {
  const isFetching = useIsFetching();
  return (
    <>
      {isFetching !== 0 && <GlobalLoader />}
      <div className="container">
        <Nav />
        <Switch>
          <Protected exact path="/vehicles" component={Vehicles} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default Router;
