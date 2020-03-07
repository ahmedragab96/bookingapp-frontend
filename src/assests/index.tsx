interface ImagesInterface {
  eventsBackground: string;
  eventsLogo: string;
  emptyImage: string;
  eventOne: string;
  eventTwo: string;
  eventThree: string;
  eventFour: string;
}

export const images: ImagesInterface = {
  eventsBackground: require('./images/events.jpg'),
  eventsLogo: require('./images/eventsLogo.jpg'),
  emptyImage: require('./images/profile-placeholder.png'),
  eventOne: require('./images/event1.jpg'),
  eventTwo: require('./images/event2.jpg'),
  eventThree: require('./images/event3.jpg'),
  eventFour: require('./images/event4.jpg'),
};
