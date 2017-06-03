import { Meteor } from 'meteor/meteor';

const Channels = new Mongo.Collection('channels');

export default Channels;

const getChannel = (id) => {
  return Channels.find(id);
}

const join = (id) => {
  return Channels.update(
    { _id: id },
    { $addToSet: { users: Meteor.userId() } }
  );
}

const create = () => {
  Channels.insert({
    users: [Meteor.userId()]
  });
}

export { getChannel, join, create }
