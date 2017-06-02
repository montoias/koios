import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class Main extends React.Component {
  render() {
    return (
      <div>Main</div>
    );
  }
}

export default createContainer(function() {
  return {};
}, Main);
