const initialState = {
    question: null
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setQuestion':
            return  {...state, ...action.payload}
        case 'deleteQuestion':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default questionReducer;