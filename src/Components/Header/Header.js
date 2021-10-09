import React from "react";

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontStyle:"Italic"}}><h2>C4Online</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"black"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black"}}>Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black"}}>History</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black"}}>Help</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;
