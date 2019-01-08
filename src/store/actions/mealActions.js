export const createMeal = (meal) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;
        const today = getToday();
        const now = getCurrentTime();

        firestore.collection('users').doc(userID).collection('History').doc(today).collection(meal.mealType).doc(now).set({
            mealName: meal.mealName,
            calories: meal.calories
        }).then(() => {
            dispatch({type: 'CREATE_MEAL_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'CREATE_MEAL_ERROR'});
        });
    }
}
const getToday = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '.' + mm + '.' + yyyy;

    return today;
}

const getCurrentTime = () => {
    let now = new Date().toLocaleString('pl-pl', {hour: "numeric", minute: "numeric"});
    
    return now;
}