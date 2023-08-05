import React, { Component } from 'react';



import { Link } from 'react-router-dom';



export class Navbar extends Component {

  render() {

    return (

      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="container-fluid">

            <Link className="navbar-brand" to="/">NewsPro</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

              <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">

                  <Link className="nav-link" aria-current="page" to="/">Home</Link>

                </li>

                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

              </ul>

              <form className="d-flex" role="search">

                {/* <div className={`form-check form-switch mx-5 my-2 text-${this.props.mode === 'light' ? 'dark' : 'light'}`}> */}

                <div className={`form-check form-switch mx-5 my-2 text-light`}>

                  <input className="form-check-input" type="checkbox" onClick={this.props.togglemode} role="switch" id="flexSwitchCheckDefault" />

                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>

                </div>

              </form>

            </div>

          </div>

        </nav>

      </div>

    )

  }

}