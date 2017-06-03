import { Meteor } from 'meteor/meteor';
import { getVotesForChannel } from './db';

if (Meteor.isServer) {
  Meteor.publish('votes', getVotesForChannel);
}
