const initState = {}

const caloriesreducer = (state = initState, action) => {
    switch (action.type) {
        case 'CALORIES_ADDED_SUCCESSFULLY':
          console.log('create project success');
          return state;
        case 'CALORIES_ADDED_FAILED':
          console.log('create project error');
          return state;
        default:
          return state;
    }
};