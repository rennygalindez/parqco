import Router from './components/Router/Router';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <>
      <Router />;
      <ReactQueryDevtools />
    </>
  );
}

export default App;
