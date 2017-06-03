import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ip: null,
      channelId: ''
    };
  }
  
  componentDidMount() {
    axios.get('https://api.ipify.org?format=json').then(({data}) => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <Link className="brand-logo" to="/">KOÏOS</Link>
          </div>
        </nav>

        <div className="home__container">
          <div className="input-field home__container__input">
            <input placeholder="Share with your friends...." type="text" onChange={({target}) => this.setState({channelId: target.value}) } value={this.state.channelId} />
            <Link className="btn-floating btn-large waves-effect waves-light blue" to={`/suggestions/${this.state.channelId}`}>    
              <i className="material-icons right">send</i>
            </Link>
          </div>

          <div className=" home__container__or">OR</div>
          
          <Link className="waves-effect waves-light btn-large blue" to={`/suggestions/${this.state.ip}`}>
            <i className="material-icons right ">wifi</i>
            Connect
          </Link>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {};
}, Home);
