import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './Components/SignUp/SignUpForm';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <Login />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
