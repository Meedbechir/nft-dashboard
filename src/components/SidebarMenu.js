import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import './SidebarMenu.css';
import Logo from '../Images/Logo.png'


function SidebarMenu() {

    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="bg-white col-auto w-100 min-vh-100 d-flex flex-column sdb">
            <div className="d-flex align-items-center">
              <a href="/" className='text-decoration-none d-none d-sm-inline text-dark d-flex align-items-center ms-5 mt-2'>
               <img src={Logo} alt="Logo" />
              </a>
            </div>
            <hr className='text-secondary d-none d-sm-block' />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                <p className='text-dark me-5 d-none d-sm-inline fw-bold'>MARKETPLACE</p>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0  dashboard-link">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-grid'></i>
                  <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-house'></i>
                  <span className='ms-3 d-none d-sm-inline'>Home</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-cart'></i>
                  <span className='ms-3 d-none d-sm-inline'>Market</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-star'></i>
                  <span className='ms-3 d-none d-sm-inline'>Favorites</span>
                </a>
              </li> <br /><br /><br />
              <p className='text-dark me-5 d-none d-sm-inline fw-bold'>MY PROFILE</p>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-3 d-none d-sm-inline'>Insight</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-wallet'></i>
                  <span className='ms-3 d-none d-sm-inline'>Wallet</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-person'></i>
                  <span className='ms-3 d-none d-sm-inline'>Profile</span>
                </a>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <a href="/" className="nav-link text-dark fs-5 d-flex align-items-center" aria-current="page">
                  <i className='bi bi-gear'></i>
                  <span className='ms-3 d-none d-sm-inline'>Setting</span>
                </a>
              </li>
            </ul>
            <div className="padding">
            <a href="/" className='nav-link text-decoration-none d-none d-sm-inline text-dark d-flex align-items-center fs-5 py-2 py-sm-0 text-dark'>
                <i className='bi bi-box-arrow-right ms-3'></i>
                <span className='ms-3 d-none d-sm-inline'>Log Out</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SidebarMenu;
  