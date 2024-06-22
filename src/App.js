import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import CustomComponents from './CustomComponents';

function App() {

  let flag = true;
  return (
    <div className="App">

      {/* calling Heading component */}
      {/* conditional rendering */}
      {flag ? (<Heading/>)  : (<CustomComponents/>)}
      <Heading></Heading>
      <CustomComponents></CustomComponents>
    </div>
  );
}

export default App;
