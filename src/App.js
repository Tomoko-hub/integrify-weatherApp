import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './conponents/Home';
import Form from './conponents/Form';

function App() {
  return (
    <div className="App">
      <h1>Tämä on App Component</h1>
      <Home />
      <Form />
    </div>
  );
}

export default App;
