import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR} from '../actions/index';

const initialState = {
    users: [],
    isLoading: false,
    error: ''
};

const userReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_USER_REQUEST: return {
            ...state,
            isLoading: true
        }
        case GET_USER_SUCCESS: return {
            users: action.payload,
            isLoading: false
        }
        case GET_USER_ERROR: return {
            error: action.payload,
            isLoading: false
        }
        default:
            return state;
    }
}

export default userReducer
