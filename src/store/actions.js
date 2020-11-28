import { getImages, getUser } from '../api/imgur';

export const showImages = (section, sort, window, showViral) => {
    let urlParameters = '';

    if (window) {
        urlParameters = `gallery/${section}/${window}?showViral=${showViral}`;
    } else {
        urlParameters = `gallery/${section}/${sort}?showViral=${showViral}`;
    }

    return (dispatch) => {
        getImages(urlParameters)
            .then((res) => {
                const { data } = res.data;
                dispatch({
                    type: 'GET_IMAGES',
                    images: data,
                });
            })
            .catch((err) => console.log('Error in getImages actionCreator: ', err));
    };
};

export const showUser = (user) => {
    let urlParameters = `account/${user}`;

    return (dispatch) => {
        getUser(urlParameters)
            .then((res) => {
                const { data } = res.data;
                dispatch({
                    type: 'GET_USER',
                    user: data,
                });
            })
            .catch((err) => console.log('Error in getUser actionCreator: ', err));
    };
};
