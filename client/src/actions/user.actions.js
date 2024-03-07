import * as api from '../api'

export const fetchAllUser = () => async(dispatch) => {
    try {
        const { data } = await api.fetchAllUser()
        dispatch({
            type: 'FETCH_USER',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}