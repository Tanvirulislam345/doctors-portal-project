import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/SingUpIn/Login/Login';
import Register from './Pages/SingUpIn/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/SingUpIn/PrivateRoute/PrivateRoute';
import Dashbord from './Pages/Dashbord/DashBord/Dashboard';

function App() {
  return (
    <AuthProvider>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <PrivateRoute path="/dashbord">
            <Dashbord></Dashbord>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
