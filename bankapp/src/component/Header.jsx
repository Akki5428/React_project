import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
    <div class="card-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/withdraw">WITHDRAW</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/dipo">DEPOSIT</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/trans">SHOW TRANSITION</Link>
      </li>

    </ul>  
    </div>
</nav>
    </div>
    </div>
  )
}
