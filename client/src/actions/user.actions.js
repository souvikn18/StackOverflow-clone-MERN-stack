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

export const updateProfile = (id, updateData) => async(dispatch) => {
    console.log(updateData);
    try {
        const {data} = await api.updateProfile(id, updateData)
        dispatch({
            type: 'UPDATE_PROFILE',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}