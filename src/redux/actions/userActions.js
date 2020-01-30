import axios from 'axios';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
// import dispatch from 'react-redux';

export const getUsersRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
};

export const getUsersSuccess = users => {
    return {
    type: GET_USER_SUCCESS,
    payload: users
    }
}

export const getUsersError = error => {
    return {
    type: GET_USER_ERROR,
    payload: error
    }
};

export const getUsers = () => {
    return(dispatch) => {
        dispatch(getUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data;
            dispatch(getUsersSuccess(users));
        })
        .catch(error =>{
            const errorMsg = error.message;
            dispatch(getUsersError(errorMsg));
        });
    };
};