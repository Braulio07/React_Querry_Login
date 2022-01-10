import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRouter } from "./components/Routes/AppRouter";


function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
