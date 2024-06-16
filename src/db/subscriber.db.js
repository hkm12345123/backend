const Subscriber = require("../app/models/subscriber.model.js");

// Get all subscriber
const getAllSubscriberDb = async (query) => {
  const [totalSubscriber, subscriber] = await Promise.all([
    Subscriber.find(query).count(),
    Subscriber.find(query),
  ]);
  return {
    subscriber,
    totalSubscriber,
  };
};

// Get one subscriber
const getSubscriberDb = async (query) => {
  const subscriber = await Subscriber.findOne(query);

  return subscriber;
};

// Create one subscriber
const createSubscriberDb = async (query) => {
  const subscriber = await new Subscriber(query).save();

  return subscriber;
};

// Delete subscriber
const deleteSubscriberDb = async (query) => {
  const rs = await Subscriber(query).delete();

  return rs;
};

// Edit subscriber
const editSubscriberDb = async (query) => {
  const { name, _id, subscribedToChannel } = query;

  const subscriber = await subscriber.findById(_id);
  subscriber.name = name;
  subscriber.subscribedToChannel = subscribedToChannel;
  const rs = await subscriber.save();
  return rs;
};

module.exports = {
  getAllSubscriberDb,
  getSubscriberDb,
  createSubscriberDb,
  deleteSubscriberDb,
  editSubscriberDb,
};
