import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>My-Shop</h1>
          <div className='spacer'></div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
