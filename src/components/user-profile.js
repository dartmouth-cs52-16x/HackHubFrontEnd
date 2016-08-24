import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { Link } from 'react-router';

// example class based component (smart component)
class UserProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      user: '',
    };
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.user);
    this.setState({
      user: nextProps.user.user,
    });
  }

  render() {
    if (this.state.user == null) {
      // if company not yet fetched
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.state.user.fullname}</b>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 thumb">
              <div className="imagerow">
                <img className="profimg" src={this.state.user.image} alt="?" />
              </div>
            </div>
            <div className="compsite">
              <a id="link" href={`${this.state.user.website}`}>Website</a>
            </div>
            <div className="comprecruiter">
              <a id="link" href={`${this.state.user.linkedin}`}>LinkedIn</a>
            </div>
            <div className="comprecruiter">
              <a id="link" href={`${this.state.user.facebook}`}>Facebook</a>
            </div>
            <br />
            <div className="compabout">
              <b>About:</b> {this.state.user.about}
            </div>
            <br />
          </div>
        </div>
        <div className="input-group col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
          <b>Add a skill:</b>
          <div className="input-group">
            <input type="text" className="form-control" id="submit-bar" placeholder="javascript"></input>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit" onClick={this.onButtonClick} >New</button>
            </span>
          </div>
        </div>
        <button className="submitjob" onClick={this.submitSkill}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    user: state.users.user,
  }
);

export default connect(mapStateToProps, { fetchUser })(UserProfile);
