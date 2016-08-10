import React, { Component } from 'react';
import EventList from './eventList';
import EventPage from './eventPage';
// import debounce from 'lodash.debounce';
import '../style.scss';

// based on the app from the short assignment 4

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    // this.search('pixar');
    // this.search = debounce(this.search, 300);
  }
  search(text) {
    // youtubeSearch(text).then(videos => {
    //   this.setState({
    //     videos,
    //     selectedVideo: videos[0],
    //   });
    // });
  }
  render() {
    return (
      <div className="main">
        <div id="video-section">
          <EventPage video={this.state.selectedVideo} />
          <EventList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
