import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import Edit from './components/edit';
import View from './components/view';

function App() {
  return (
    <div className="App">
      <>
      <nav className='navbar navbar-expand navbar-drak bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className='nav-link text-white'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/create"} className='nav-link text-white'>Create</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />          
        </Routes>
      </div>
      </>
    </div>
  );
}

export default App;
