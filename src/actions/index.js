import axios from 'axios';
import { browserHistory } from 'react-router';

// const ROOT_URL = 'https://hackhub-server.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_ANNS: 'FETCH_ANNS',
  CREATE_ANNS: 'CREATE_ANNS',
  DELETE_ANNS: 'DELETE_ANNS',
  FETCH_COMPS: 'FETCH_COMPS',
  CREATE_COMP: 'CREATE_COMP',
  DELETE_COMP: 'DELETE_COMP',
  FETCH_COMP: 'FETH_COMP',
  UPDATE_COMP: 'UPDATE_COMP',
  FETCH_USER: 'FETCH_USER',
  FETCH_USERS: 'FETCH_USERS',
  DELETE_USER: 'DELETE_USER',
  AUTH_USER: 'AUTH_USER',
  AUTH_USER_UPDATE: 'AUTH_USER_UPDATE',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  CREATE_HELP: 'CREATE_HELP',
  FETCH_HELP: 'FETCH_HELP',
  DELETE_HELP: 'DELETE_HELP',
  CREATE_SCHED: 'CREATE_SCHED',
  FETCH_SCHED: 'FETCH_SCHED',
  UPDATE_SCHED: 'UPDATE_SCHED',
};

// fetch all announcements
export function fetchAnnouncements() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/announcements`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
  ${date.toString().split(' ')[4]}`;
  return (dispatch) => {
    const fields = { text: ann.text, date: dateString };
    axios.post(`${ROOT_URL}/announcements`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/announcements`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.delete(`${ROOT_URL}/announcements/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/announcements`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
export function fetchCompanies() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/company`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.FETCH_COMPS, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting posts');
    });
  };
}

// create a new post
export function createCompany(comp) {
  return (dispatch) => {
    const fields = { name: comp.name, image: comp.image, website: comp.website, recruiter: comp.recruiter };
    axios.post(`${ROOT_URL}/company`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/company`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.delete(`${ROOT_URL}/company/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/company`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
        dispatch({ type: ActionTypes.DELETE_COMP, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting companies');
      });
    }).catch(error => {
      console.log('Error deleting company');
    });
  };
}

// fetch a single company
export function fetchCompany(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/company/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.FETCH_COMP, payload: { comp: response.data } });
    }).catch(error => {
      console.log('Error getting posts');
      browserHistory.push('/error');
    });
  };
}

// update a company
export function updateCompany(comp) {
  return (dispatch) => {
    const fields = { name: comp.name, image: comp.image, website: comp.website, recruiter: comp.recruiter,
      jobs: comp.jobs, about: comp.about };
    axios.put(`${ROOT_URL}/company/${comp.id}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.FETCH_COMP, payload: { comp: response.data } });
    }).catch(error => {
      console.log('Error updating company');
      browserHistory.push('/error');
    });
  };
}

// create a new post
export function createHelp(help) {
  return (dispatch) => {
    const fields = { message: help.message, category: help.category, id: help.id };
    axios.post(`${ROOT_URL}/help`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      browserHistory.push('helpdone');
    }).catch(error => {
      console.log('Error creating help');
    });
  };
}

// fetch all posts
export function fetchHelp() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/help`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log('help data');
      console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_HELP, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting help');
    });
  };
}

// delete help
export function deleteHelp(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/help/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/help`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
        dispatch({ type: ActionTypes.DELETE_HELP, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting help');
      });
    }).catch(error => {
      console.log('Error deleting help');
    });
  };
}

export function fetchUser(id) {
  console.log(`fetch user ${id}`);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/users/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log('data');
      console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_USER, payload: { user: response.data } });
    }).catch(error => {
      console.log(error);
    });
  };
}

// fetch all posts
export function fetchUsers() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/users`).then(response => {
      dispatch({ type: ActionTypes.FETCH_USERS, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting users');
    });
  };
}

// delete post
export function deleteUser(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/users/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/users`).then(response => {
        dispatch({ type: ActionTypes.DELETE_USER, payload: { all: response.data } });
      }).catch(error => {
        console.log('Error getting users');
      });
    }).catch(error => {
      console.log('Error deleting user');
    });
  };
}

// update a company
export function updateUser(user) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/users/${user.id}`, user, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data);
      browserHistory.push(`users/${user.id}`);
    }).catch(error => {
      console.log('Error updating user');
      browserHistory.push('/error');
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
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      console.log('user is here');
      console.log(response.data.user);
      console.log(response.data.role);
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.user });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('role', response.data.user.role);
      localStorage.setItem('company', response.data.user.company);
      browserHistory.push('/');
    })
    .catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser(user) {
  // takes in an object with email and password (minimal user object)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/`, user).
    then(response => {
      console.log(response.data);
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.user });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('role', response.data.user.role);
      localStorage.setItem('company', response.data.user.company);
      browserHistory.push('/');
      console.log(response);
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

export function fetchAuthUser(id) {
  console.log(id);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/users/${id}`).then(response => {
      console.log('data');
      console.log(response.data);
      dispatch({ type: ActionTypes.AUTH_USER_UPDATE, payload: response.data });
    }).catch(error => {
      console.log(error);
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

// fetch all posts
export function fetchSchedule() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/schedule`).then(response => {
      dispatch({ type: ActionTypes.FETCH_SCHED, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error getting scheudle');
    });
  };
}

// create a new post
export function createSchedule(input) {
  return (dispatch) => {
    const fields = {
      day1: {
        day_of_week: input.day1.day_of_week,
        month: input.day1.month,
        day: input.day1.day,
        range: {
          start: input.day1.range.start,
          end: input.day1.range.end,
        },
        events: input.day1.events,
      },
      day2: {
        day_of_week: input.day2.day_of_week,
        month: input.day2.month,
        day: input.day2.day,
        range: {
          start: input.day2.range.start,
          end: input.day2.range.end,
        },
        events: input.day2.events,
      },
    };
    axios.post(`${ROOT_URL}/schedule`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      axios.get(`${ROOT_URL}/schedule`).then(response => {
        dispatch({ type: ActionTypes.CREATE_SCHED, payload: { all: response.data } });
        browserHistory.push('update_schedule');
      }).catch(error => {
        console.log('Error getting schedule');
      });
    }).catch(error => {
      console.log('Error creating schedule');
    });
  };
}

// update a company
export function updateSchedule(input) {
  return (dispatch) => {
    const fields = {

      id: input.id,
      day1: {
        day_of_week: input.day1.day_of_week,
        month: input.day1.month,
        day: input.day1.day,
        range: {
          start: input.day1.range.start,
          end: input.day1.range.end,
        },
        events: input.day1.events,
      },
      day2: {
        day_of_week: input.day2.day_of_week,
        month: input.day2.month,
        day: input.day2.day,
        range: {
          start: input.day2.range.start,
          end: input.day2.range.end,
        },
        events: input.day2.events,
      },
    };
    axios.put(`${ROOT_URL}/schedule/${fields.id}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data);
      browserHistory.push('/schedule');
    }).catch(error => {
      console.log(error);
      browserHistory.push('/error');
    });
  };
}
