import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MovieSelect from '../../components/movie-select';

class Suggestions extends React.Component {
  componentDidMount() {
    Meteor.call('channel.join', this.props.channelId);
  }

  render() {
    let { props } = this;

    return (
      <div>
        <MovieSelect movie={props.movies[0]} onVote={this._onVote.bind(this)}/> 
      </div>
    );
  }

  _onVote(movieId, value) {
    let userId = 'asdas';
    Meteor.call('vote.create', { userId, value, movieId: this.props.movies[0].id, channelId: this.props.channelId });
  }
}

const demoURL = 'https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/14324603_10206532643426573_5341801418521238848_o.jpg?oh=0ef80b31bb03f0e4ebe37ff8bdb483fa&oe=59E63200';

export default createContainer(function(props) {
  let channelId = props.match.params.id;
  let channelHandler = Meteor.subscribe('channel', channelId);
  let voteHandler = Meteor.subscribe('votes', channelId);

  return {
    movies: [
      {
        title: 'Hello',
        id: 1,
        year: 1999,
        photos: [
          {url: demoURL},
          {url: 'asdas'}
        ],
        opinions: [{name: 'Alexandre', id: 0}, {name: 'Toi', id: 8}]
      }
    ],
    isLoading: channelHandler.ready() || voteHandler.ready(),
    channelId
  };
}, Suggestions);
