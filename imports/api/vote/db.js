const Votes = new Mongo.Collection('votes');

export default Votes;

const getVotesByChannelId = (channelId) => {
  return Votes.find({ channelId });
}

const create = ({ userId, value, movieId, channelId }) => {
  let vote = {
    channelId,
    userId,
    movieId,
    value,
    //createdAt: moment.now()
  }
    
  return Votes.insert(vote);
}

export { getVotesByChannelId, create }
