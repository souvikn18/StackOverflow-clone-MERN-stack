const userReducer = (state =[], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload
        case 'UPDATE_PROFILE':
            return state.map((e) => e._id === action.payload._id ? action.payload : state)
    
        default:
            return state;
    }
}

export default userReducer