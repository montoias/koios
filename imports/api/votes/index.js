import { Meteor } from 'meteor/meteor';
import { getVotesForChannel } from './db';

Meteor.publish('votes', getVotesForChannel);

