export const Votes = new Mongo.Collection('votes');

const getVotesForChannel = (id) => {
  return Votes.find(id);
}

export { getVotesForChannel }
