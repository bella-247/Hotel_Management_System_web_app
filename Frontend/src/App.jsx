import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
// import Rooms from './Pages/Rooms/Rooms';
// import Reservation from './Pages/Reservation/Reservation';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;