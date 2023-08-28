import React from 'react'
import '../Header.css';
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <>
    <div className='header'>
      <h1>Header</h1>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/aboutus">ABOUT US</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contactus">CONTACT US</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/store">STORE</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/getdata">GET DATA</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">API DEMO1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">API DEMO2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo3">API DEMO3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo4">API DEMO4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo5">API DEMO5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apitemp">API TEMP</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo6">API DEMO6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usercompquery">UserCompQuery</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
