const initState = {}

const mealReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MEAL_SUCCESS':
          console.log('create meal success');
          return state;
        case 'CREATE_MEAL_ERROR':
          console.log('create meal error');
          return state;
        default:
          return state;
    }
};