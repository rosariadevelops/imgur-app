const initialState = {
    images: [],
    error: '',
};

const rootReducer = (state = initialState, action) => {
    if (action.type === 'GET_IMAGES') {
        state = Object.assign({}, state, {
            images: action.images,
        });
    } else if (action.type === 'GET_USER') {
        state = Object.assign({}, state, {
            user: action.user,
        });
    }
    return state;
};

export default rootReducer;
