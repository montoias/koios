import { Meteor } from 'meteor/meteor';
import Votes, { getVotesByChannelId, create } from './db';

export { Votes };

Meteor.methods({
  'vote.create': create
});

if (Meteor.isServer) {
  Meteor.publish('votes', getVotesByChannelId);
}



