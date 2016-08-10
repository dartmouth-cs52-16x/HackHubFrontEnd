import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AnnouncementOrganizer from './announcement_organizer';
// import { fetchPosts } from '../actions/index';

class AnnouncePage extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (<div className="home">
      <p>My Posts: </p>
      {
        this.props.posts.map(post => {
          return (
            <div key={post.id} className="items">
              <Link to={`/posts/${post.id}`}>
                <div className="title">
                  <span>{post.title}</span>
                  <span className="tags">{post.tags}</span>
                </div>
              </Link>
            </div>
          );
        })
      }
    </div>);
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(AnnouncePage);
