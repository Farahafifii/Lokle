import Login from './login';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect,
  Routes
} from "react-router-dom";
  
function App() {
  return (
    <div className="App">
      <div className="content">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}>
           </Route>
      <Route path="/Home" element={<Home />}> </Route>
         </Routes>
       </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
