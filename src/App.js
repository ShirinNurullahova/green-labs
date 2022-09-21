
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Sharper from './components/Sharper/Sharper';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 


function App() {
  return (
    <div className="App">


<Router>

<Routes>
  <Route exact path="/" element={<HomePage />} />
   <Route exact path="/sharp" element={<Sharper />} /> 
</Routes>
</Router>
  
   
    </div>
  );
}

export default App;
