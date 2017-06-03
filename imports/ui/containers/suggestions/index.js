import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MovieSelect from '../../components/movie-select';

const Suggestions = (props) => {
  return (
    <div>
      <MovieSelect movie={props.movies[0]}/> 
    </div>
  );
};

const demoURL = 'https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/14324603_10206532643426573_5341801418521238848_o.jpg?oh=0ef80b31bb03f0e4ebe37ff8bdb483fa&oe=59E63200';

export default createContainer(function(props) {
  let votesHandler = Meteor.subscribe('votes', props.match.params.id);

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
    isLoading: votesHandler.ready()
  };
}, Suggestions);
