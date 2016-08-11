import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_ANNS: 'FETCH_ANNS',
  CREATE_ANNS: 'CREATE_ANNS',
  FETCH_COMP: 'FETCH_COMP',
  CREATE_COMP: 'CREATE_COMP',
};

// fetch all posts
export function fetchAnnouncements() {
  console.log('fetched');
  return (dispatch) => {
    axios.get(`${ROOT_URL}/announcement`).then(response => {
      dispatch({ type: ActionTypes.FETCH_ANNS, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting posts');
    });
  };
}

// create a new post
export function createAnnouncement(ann) {
  console.log('created');
  return (dispatch) => {
    const fields = { text: ann.text, date: ann.date };
    axios.post(`${ROOT_URL}/announcement`, fields).then(() => {
      axios.get(`${ROOT_URL}/announcement`).then(response => {
        dispatch({ type: ActionTypes.CREATE_ANNS, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting posts');
      });
    }).catch(error => {
      console.log('Error creating post');
    });
  };
}

// delete post
export function deleteAnnouncement(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/announcement`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error deleting post');
    });
  };
}

// fetch all posts
export function fetchCompany() {
  console.log('fetched');
  return (dispatch) => {
    axios.get(`${ROOT_URL}/company`).then(response => {
      dispatch({ type: ActionTypes.FETCH_COMP, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting posts');
    });
  };
}

// create a new post
export function createCompany(ann) {
  console.log('created');
  return (dispatch) => {
    const fields = { text: ann.text, date: ann.date };
    axios.post(`${ROOT_URL}/company`, fields).then(() => {
      axios.get(`${ROOT_URL}/company`).then(response => {
        dispatch({ type: ActionTypes.CREATE_COMP, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting posts');
      });
    }).catch(error => {
      console.log('Error creating post');
    });
  };
}

// delete post
export function deleteCompany(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/company/${id}`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error deleting company');
    });
  };
}
