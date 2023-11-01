import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar()
{
    return(
        <>
         <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand ms-5 text-warning" href="#Tamil"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto gap-5 mb-2 mb-lg-0">
        <li class="nav-item">
           <Link className='Navba' to='/'>Home</Link>
        </li>
        <li class="nav-item">
           <Link className='Navba' to='/about'>About</Link>
        </li>
        <li class="nav-item">
           <Link className='Navba' to='/qualification'>Qualification</Link>
        </li>
        <li class="nav-item">
           <Link className='Navba' to='/certification'>Certification</Link>
        </li>
        <li class="nav-item">
           <Link className='Navba' to='/skills'>Skills</Link>
        </li>
        <li class="nav-item">
           <Link className='Navba' to='/contact'>Contact</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </>
    );
}