import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount= ({ count }) => ({
    type: 'SET',
    count

});



const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
    case 'INCREMENT':
    
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
    
    return {
        count: state.count + incrementBy
        
    };
    
    case 'DECREMENT':

    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
    return {
        count: state.count  - decrementBy
    };

    case 'DECREMENT':
   
    return {
        count: state.count  - decrementBy
    };

    case 'SET':
   
    return {
        count: action.count
    };
    
    case 'RESET':
    return {
        count: 0
    };
    
    default:
          return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(incrementCount({incrementBy: 2}))

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(setCount({count: 100}));




console.log(store.getState());
