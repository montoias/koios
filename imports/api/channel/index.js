import { Meteor } from 'meteor/meteor';
import Channels, { getChannel, join, create } from './db';

export { Channels };


if (Meteor.isServer) {
  Meteor.publish('channel', getChannel);
  Meteor.methods({
    'channel.join': join,
    'channel.create': create
  });
}



