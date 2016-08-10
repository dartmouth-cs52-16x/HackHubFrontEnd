// like the blog, organizers are able to make announcements
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AnnouncementOrganizer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onSubmitChange(event) {
    const fields = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    };
    this.props.createPost(fields);

    console.log(fields);
  }

  render() {
    return (
      <div className="input_bar">
        <h className="newpost">Create A New Post</h>
        <input className="input" value={this.state.title} onChange={this.onTitleChange} placeholder={"title"} />
        <input className="input" value={this.state.tags} onChange={this.onTagsChange} placeholder={"tags"} />
        <input className="input" value={this.state.content} onChange={this.onContentChange} placeholder={"content"} />
        <div className="Button">
          <span><button onClick={this.onSubmitChange}>Submit</button></span>
          <Link to="/"><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(AnnouncementOrganizer);
