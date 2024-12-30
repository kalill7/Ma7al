import React, { useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    
  }, []);

  return (
    <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">
              <Link to = "/" className = "navbar-brand">
                <span className = "text-regal-blue">Ma7ali</span><span className='text-gold'>Losta</span>
              </Link>
          </div>
        </div>
        
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <button type = "button" className='navbar-show-btn text-gold' >
              <i className = "fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;