import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



export default class ExpenseForm extends React.Component {
constructor(props) {
super(props);
this.state={
    description: props.expense ? props.expense.description: '',
    note: props.expense ? props.expense.note: '',
    amount:props.expense ? (props.expense.amount): '',
    createdAt:props.expense ? moment(props.expense.createdAt): moment(),
    focused:false,
    error:''
};
}
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState (() => ({ description }));
    };
    onTextChange = (e) => {
        const note = e.target.value;
        this.setState (() => ({ note }));
    };
    onAmountChange = (e) => {

        const amount = e.target.value;
        if(!amount || amount.match(/^\d*(\.\d{0,2})?$/)){

        this.setState (() => ({ amount }));
    }
    };

    onDateChange = (createdAt) => {
        if(createdAt)
    {
        this.setState (() => ({ createdAt}));
    }
    };

    onFocusChange = ({focused}) => {
        this.setState (() => ({ focused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
        this.setState(() => ({
        error:'Please Provide Description and amount'}));
        }else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note   
               });      
        }
    };
    render() {
        return(
          
        
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          
          />
          <input 
          type="number"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
           />
          <textarea
          placeholder='Add for Text'
          className="text-input"
          value={this.state.note}
          onChange={this.onTextChange}
          >
          </textarea>
          <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          />
          <div>
          <button className="button">Add Expense</button>
          </div>
         
          </form>
           
        )
    }

}