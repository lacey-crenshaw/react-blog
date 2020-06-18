import React from 'react'

// styles
let navWidth = {
    width: '800px'
}

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={navWidth}>
    <div class="navbar-brand" Link to="#">React Blog</div>
    <div className="navbar-toggler" type="div" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </div>
  
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <div className="nav-link" Link to="#">Home <span class="sr-only">(current)</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" Link to="#">Posts</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" Link to="https://github.com/lacey-crenshaw">Portfolio</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" Link to="#">About</div>
        </li>
      </ul>
    </div>
  </nav>
    )
  }

  export default NavBar