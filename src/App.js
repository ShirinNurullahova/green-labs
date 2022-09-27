
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Sharper from './components/Sharper/Sharper';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 
import Submit from './components/Submit/Submit';


function App() {
  return (
    <div className="App">


<Router>

<Routes>
  <Route exact path="/" element={<HomePage /> } />
   <Route exact path="/sharp" element={<Sharper />} /> 
   <Route exact path="/submit" element={<Submit />} /> 

</Routes>
</Router>
  
   
    </div>
  );
}

export default App;
