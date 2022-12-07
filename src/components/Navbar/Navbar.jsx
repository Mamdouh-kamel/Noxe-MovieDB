import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import RemoveItem from '../ProtectedRoutes/RemoveItem';
import { setKeyword } from '../Redux/SearchSlice';
export default function Navbar(props) {

  let dispathcher = useDispatch();

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-black navbar-dark mb-3`}>
        <div className="container-fluid mx-2 border-1 border-botto border-white border-opacity-25">
          <NavLink className={`navbar-brand`} to="/Noxe-MovieDB"><h2 className='fw-bold'>Noxe</h2></NavLink>
          <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            menu <span className={`navbar-toggler-icon`} ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!props.auth ? <>
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/Noxe-MovieDB">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/tv">Tv Show</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/people">People</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Discussions</Link></li>
                    <li><Link className="dropdown-item" href="#">Leaderboard</Link></li>
                    <li><Link className="dropdown-item" href="#">Support</Link></li>
                  </ul>
                </li>

              </> :
                <><li className="nav-item">
                  <NavLink className={`nav-link`} to="/signin">Signin</NavLink>
                </li>
                  <li className="nav-item">
                    <NavLink className={`nav-link`} to="/signup">Signup</NavLink>
                  </li></>}
            </ul>
            {!props.auth ? <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <form action="" className='d-flex'>
                <li className="nav-item me-3 d-flex">
                  <input className="form-control rounded-pill bg-white-50 text-whit shadow-non" onChange={({ target }) => {
                    dispathcher(setKeyword(target.value))
                  }} type="search" placeholder="Search" aria-label="Search" />
                </li>
                <div className='d-flex align-items-center justify-content-between'>
                <Link><i className="fa-brands fa-facebook me-2"></i></Link>
                <Link><i className="fa-brands fa-twitter me-2"></i></Link>
                <Link><i className="fa-brands fa-youtube me-2"></i></Link>
               </div>
              </form>
              
              <li className="nav-item">
                <NavLink className={`nav-link`} onClick={RemoveItem} to="/signin">Logout</NavLink>
              </li>
            </ul> : ''}
          </div>
        </div>
      </nav>

    </>
  )
}
