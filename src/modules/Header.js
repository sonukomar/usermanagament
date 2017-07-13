import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
     <div className="row">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
               
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand headingFont" href="/">UserManagement<footer>Best management solution for you</footer>
                </a>
                </div>

               
                <div className={"collapse navbar-collapse " + (this.props.loggedInStatus.email ? 'show':'hide')} id="bs-example-navbar-collapse-1">
              
               
                <ul className="nav navbar-nav navbar-right">
                    <li className = {this.props.loggedInStatus.isLoggedIn ? 'hide':'show'}><a href="/#login">Login</a></li>
                    <li className = {this.props.loggedInStatus.isLoggedIn ? 'show':'hide'}><a href="/#login">Logout</a></li>
                    <li className={"dropdown " + (this.props.loggedInStatus.email ? 'show':'hide')}>
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.loggedInStatus.email}<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="/">Action</a></li>
                        <li><a href="/">Another action</a></li>
                        <li><a href="/">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="/">Separated link</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
     </div>
    );
  }
}

export default Header;
