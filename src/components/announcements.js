import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { fetchPosts } from '../actions/index';

class Announcement extends Component {

  // componentWillMount() {
  //   this.props.fetchPosts();
  // }

  render() {
    return (
      <div className="home">
        <p>Announcements: </p>
        <p>There will be an announcement spot here soon.</p>
      </div>
      // {
      //   this.props.posts.map(post => {
      //     return (
      //       <div key={post.id} className="items">
      //         <Link to={`/posts/${post.id}`}>
      //           <div className="title">
      //             <span>{post.title}</span>
      //             // <span className="tags">{post.tags}</span>
      //           </div>
      //         </Link>
      //       </div>
      //     );
      //   })
      // }
    );
  }
}


// export default connect(mapStateToProps, { fetchPosts })(Announcement);
export default Announcement;
