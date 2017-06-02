import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import './styles';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">KOÏOS</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <div className="home__container">
          <div className="row">
            <div className="input-field col s12">
              <input id="room-id" type="text" className="validate" />
              <label htmlFor="room-id">Friends ID</label>
            </div>
          </div>

          <div className="row">OR</div>
          

          <a className="waves-effect waves-light btn-large">
            <i className="material-icons right">send</i>
            Wifi friends
          </a>
        </div>
      </div>
    );
  }
}

export default createContainer(function() {
  return {};
}, Home);
