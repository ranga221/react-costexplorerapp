import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    });
});


test('should test sort by amount values', () => {
const currentState = {
text:'',
startDate:undefined,
endDate:undefined,
sortBy:'date'

};

const action ={type: 'SORT_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});




//test('test set textalues', () => {
//const text = 'value';
  //  const action ={type: 'SET_TEXT', text};
    //    const state = filterReducer(currentState, action);

      //  expect(state.sortBy).toBe('text');
    //});
    
