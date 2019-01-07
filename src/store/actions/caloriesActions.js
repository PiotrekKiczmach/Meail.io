export const saveCalories = (calories) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;
        firestore.collection('users').doc(userID).update({
            calories: calories
        }).then(() => {
            dispatch({type: 'CALORIES_ADDED_SUCCESSFULLY'})
        }).catch(err => {
            dispatch({ type: 'CALORIES_ADDED_FAILED' }, err);
        });
    }
};