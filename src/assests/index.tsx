interface ImagesInterface {
  eventsBackground: string;
  eventsLogo: string;
  emptyImage: string;
}

export const images: ImagesInterface = {
  eventsBackground: require('./images/events.jpg'),
  eventsLogo: require('./images/eventsLogo.jpg'),
  emptyImage: require('./images/profile-placeholder.png'),
};
