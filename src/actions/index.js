import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_ANNS: 'FETCH_ANNS',
  CREATE_ANN: 'CREATE_ANN',
  FETCH_COMP: 'FETCH_COMP',
  CREATE_COMP: 'CREATE_COMP',
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
      browserHistory.push('/');
      browserHistory.push('/announcement');
    }).catch(error => {
      console.log(error);
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
export function fetchCompanies() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/company`).then(response => {
      dispatch({ type: 'FETCH_COMP', payload: response.data });
    }).catch(error => {
      console.log('Error getting companies');
    });
  };
}

// create a new post
export function createCompany(company) {
  return (dispatch) => {
    const fields = { text: company.text, date: company.date };
    axios.post(`${ROOT_URL}/company`, fields).then(response => {
      browserHistory.push('/');
      browserHistory.push('/companies');
    }).catch(error => {
      console.log('Error creating post');
    });
  };
}

// delete post
export function deleteCompany(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/company`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error deleting company');
    });
  };
}
