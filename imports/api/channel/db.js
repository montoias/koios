import { Meteor } from 'meteor/meteor';

const Channels = new Mongo.Collection('channels');

export default Channels;

const getChannel = (id) => {
  return Channels.find(id);
}

const join = (channelId) => {
  return Channels.update(
    { channelId },
    { $addToSet: { users: Meteor.userId() } }
  );
}

const create = (channelId) => {
  if (Channels.find({ channelId }).fetch().length > 0) {
    return;
  }

  Channels.insert({
    channelId,
    users: [Meteor.userId()]
  });
}

export { getChannel, join, create }
