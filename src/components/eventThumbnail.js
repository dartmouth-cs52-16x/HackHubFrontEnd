// based off of short assignment 4 video_list_item
// This file should contain the specific event, not video stuff
// will connect with other containers for the tabs

import React from 'react';

const EventThumbnail = (props) => {
  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <div>This would be the mini view you could click on to go to a different event</div>
    </li>
    );
};

export default EventThumbnail;
