import Login from './login';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import {
  BrowserRouter as 
  Router,
  Switch,
  Redirect,
  Route,
  Routes
} from "react-router-dom";
//
  
function App() {
  return (
    <div className="App">
      <div className="content">
      <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login />}>
           </Route>
      <Route path="/Home" element={<Home />}> </Route>
         </Routes>
       </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
