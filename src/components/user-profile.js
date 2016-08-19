import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

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


  // render() {
  //   return (
  //     <div id="userProfile">
  //       <h1>this.props.fullname</h1>
  //       <img alt="profile" />
  //       <h3>this.props.email</h3>
  //       <h3>this.props.website</h3>
  //       <h3>this.props.linkedin</h3>
  //       <h4>this.props.about</h4>
  //       <h4>this.props.skills</h4>
  //     </div>
  //   );
  // }
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
                <b>Website:</b> {this.state.user.website}
              </div>
              <div className="comprecruiter">
                <b>LinkedIn:</b> {this.state.user.linkedin}
              </div>
              <div className="comprecruiter">
                <b>Facebook:</b> {this.state.user.facebook}
              </div>
            </div>
          </div>
          <br />
          <div className="comprecruiter">
            <b>About:</b> {this.state.user.about}
          </div>
          <br />
          <div className="input-group col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
            <b>Add a skill:</b>
            <div className="input-group">
              <input type="text" className="form-control" id="submit-bar" placeholder="javascript"></input>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit" onClick={this.onButtonClick} >New</button>
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
