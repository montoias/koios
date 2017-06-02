import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const Home = () => {
  return (
    <div>Home Route</div>
  );
};

export default createContainer(function() {
  return {};
}, Home);
