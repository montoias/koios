import React from 'react';
import { Meteor } from 'meteor/meteor';
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

  _redirectOrCreateChat(urlToRedirect) {
    const { router } = this.context;

    Meteor.call('channel.create', function() {
      router.history.push(urlToRedirect);
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
            <div className="btn-floating btn-large waves-effect waves-light blue" onClick={this._redirectOrCreateChat.bind(this, `/suggestions/${this.state.channelId}`)}>    
              <i className="material-icons right">send</i>
            </div>
          </div>

          <div className=" home__container__or">OR</div>
          
          <div onClick={this._redirectOrCreateChat.bind(this, `/suggestions/${this.state.ip}`)} className="waves-effect waves-light btn-large blue">
            <i className="material-icons right ">wifi</i>
            Connect
          </div>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
}

export default createContainer(() => {
  return {};
}, Home);
