import React from 'react';
import EventThumbnail from './eventThumbnail';

// based off of videoList in short assignment 4

const EventList = (props) => {
  const eventItems = props.videos.map((video) => {
    return <EventThumbnail onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });

  return (
    <ul>
       {eventItems}
    </ul>
  );
};

export default EventList;
