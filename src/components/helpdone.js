// component for page on successful help submission

import React, { Component } from 'react';

class HelpDone extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div>
              <p>Thank you for submitting your message. The hackathon organizer should be in contact with you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpDone;
