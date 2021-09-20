const snoop = () => {};
const initialState = {
    userName: null,
    userId: null,
    token: null,
    login: snoop,
    logout: snoop,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loginFunctions':
            return {...state, ...action.payload}
        case 'auth':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer;