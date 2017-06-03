import { Meteor } from 'meteor/meteor';
import Votes, { getVotesByChannelId, create } from './db';

export { Votes };

if (!Meteor.isServer) {
  Meteor.publish('votes', getVotesByChannelId);
}

Meteor.methods({
  'vote.create': create
});


