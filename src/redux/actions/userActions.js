
import axios from 'axios'
const serverUrl = process.env.REACT_APP_SERVER_URL;


export const GET_USER_METADATA = 'GET_USER_METADATA';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';
export const LIST_USERS = 'LIST_USERS';

export const getMetadata = (token, userID) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverUrl}/v1/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch({
      type: GET_USER_METADATA,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}


