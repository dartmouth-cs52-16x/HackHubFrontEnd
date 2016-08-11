import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_ANNS: 'FETCH_ANNS',
  FETCH_POST: 'FETCH_POST',
};

// fetch all posts
export function fetchAnnouncements() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/announcement`).then(response => {
      dispatch({ type: 'FETCH_ANNS', payload: response.data });
    }).catch(error => {
      console.log('Error getting posts');
    });
  };
}

// create a new post
export function createAnnouncement(ann) {
  return (dispatch) => {
    const fields = { text: ann.text, date: ann.date };
    axios.post(`${ROOT_URL}/announcement`, fields).then(response => {
      dispatch({ type: 'CREATE_ANN', payload: response.data });
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
