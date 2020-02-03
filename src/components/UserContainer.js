import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {getUsers} from '../redux/actions/userActions'

const mapStateToProps =  state => {
    return {
        userData: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

function UserContainer({userData, getUsers}) {
 
    useEffect(() => {
        getUsers()
    }, [])
    return userData.isLoading ? (
        <div>Loading...</div>
    ) : userData.error ? (
        <div>{userData.error}</div>
    ) : (
        <div>
            {
                userData && userData.users.map(user => <p key={user.id}>{user.name}</p>)
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);