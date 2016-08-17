import axios from 'axios';
import { browserHistory } from 'react-router';

// const ROOT_URL = 'https://hackhub-server.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_ANNS: 'FETCH_ANNS',
  CREATE_ANNS: 'CREATE_ANNS',
  DELETE_ANNS: 'DELETE_ANNS',
  FETCH_COMP: 'FETCH_COMP',
  CREATE_COMP: 'CREATE_COMP',
  DELETE_COMP: 'DELETE_COMP',
  FETCH_USER: 'FETCH_USER',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// fetch all announcements
export function fetchAnnouncements() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/announcements`).then(response => {
      dispatch({ type: ActionTypes.FETCH_ANNS, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting announcements');
    });
  };
}

// create a new announcements
export function createAnnouncement(ann) {
  const date = new Date;

  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (dispatch) => {
    const fields = { text: ann.text, date: dateString };
    axios.post(`${ROOT_URL}/announcements`, fields).then(() => {
      axios.get(`${ROOT_URL}/announcements`).then(response => {
        dispatch({ type: ActionTypes.CREATE_ANNS, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting announcements');
      });
    }).catch(error => {
      console.log('Error creating post');
    });
  };
}

// delete announcements
export function deleteAnnouncement(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/announcements/${id}`).then(() => {
      axios.get(`${ROOT_URL}/announcements`).then(response => {
        dispatch({ type: ActionTypes.DELETE_ANNS, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting announcements');
      });
    }).catch(error => {
      console.log('Error deleting post');
    });
  };
}

// fetch all posts
export function fetchCompany() {
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
  return (dispatch) => {
    console.log(ann);
    const fields = { text: ann.name, date: ann.date };
    axios.post(`${ROOT_URL}/company`, fields).then(() => {
      axios.get(`${ROOT_URL}/company`).then(response => {
        dispatch({ type: ActionTypes.CREATE_COMP, payload: { all: response.data } });
        browserHistory.push('companies');
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
    axios.delete(`${ROOT_URL}/company/${id}`).then(() => {
      axios.get(`${ROOT_URL}/company`).then(response => {
        dispatch({ type: ActionTypes.DELETE_COMP, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting companies');
      });
    }).catch(error => {
      console.log('Error deleting company');
    });
  };
}

export function fetchUser(id) {
  return (dispatch) => {
    console.log(id);
    axios.get(`${ROOT_URL}/users/${id}`).then(response => {
      console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_USER, payload: { user: response.data } });
    }).catch(error => {
      console.log('Error: could not fetch user');
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser(email, password) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.id);
      browserHistory.push(`users/:${response.data.id}`);
    }).catch(error => {
      // do we need to remove the item token?
      localStorage.removeItem('token');
      dispatch(authError('Sign In Failed:'));
    });
  };
}

export function signupUser(email, password) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.id);
      browserHistory.push(`users/:${response.data.id}`);
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError('Sign Up Failed:'));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
