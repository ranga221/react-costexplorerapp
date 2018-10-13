import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate } from '../../actions/filters';



test('should trigger set start date', () => {
const action = setStartDate(moment(0));
expect(action).toEqual({
type:'SET_START_DATE',
date:  moment(0)
});

});
    

test('should trigger set end Date date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
    type:'SET_END_DATE',
    date:  moment(0)
    });
    
    });
        

   
test('should trigger set text filter date', () => {
    const action = setTextFilter('Full Bottle');
    expect(action).toEqual({
    type:'SET_TEXT',
    text:  'Full Bottle'
    });
    
    }); 


    test('should trigger sort by date', () => {
        const action = sortByDate();
        expect(action).toEqual({
        type:'SORT_DATE',
    
    });    
}); 