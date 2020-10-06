import React from 'react'
import { searchUserActions } from '../features/SearchUser/slice'
import { useDispatch } from 'react-redux';
const UserInput = () => {
    const dispatch = useDispatch();
    const {fetchUserRequest} = searchUserActions;
    function searchUser(e){
        dispatch(fetchUserRequest(e.target.value));
    }
    
    return (
        <input placeholder="소환사명 ... " onChange={searchUser}></input>
    )
}

export default UserInput;
