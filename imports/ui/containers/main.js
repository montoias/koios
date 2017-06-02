import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Login = () => {
  return (<div>Login</div>);
}

const Home = () => {
  return (<div>Home</div>);
}

const Suggestions = () => {
  return (<div>Suggestions</div>);
}

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/suggestions" component={Suggestions}/>
        </div>
      </Router>
    );
  }
}

export default createContainer(function() {
  return {};
}, Main);
