import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showUser } from '../../../store/actionCreator';
import styles from './User.module.css';

const User = ({ id, username }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(showUser(username));
    }, [dispatch, username]);

    if (!user) {
        return null;
    }

    return (
        <div className={styles.user}>
            <div className={styles.userImg}>
                <img alt={id} src={user.avatar} />
            </div>
            <div className={styles.userDetails}>
                <h5>{user.url}</h5>
                <p>
                    <span>{user.bio ? user.bio : null}</span>
                </p>
            </div>
        </div>
    );
};

export default User;
