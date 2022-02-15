import moment from 'moment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add_Reminder, remove_Reminder, clear_Reminder } from './redux/action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())
//##################################################################
  const reminders = useSelector(state => state)
  const dispatch = useDispatch()
//##################################################################
  const render_Reminder = () => {
    return(
        <ul className="list-group">
            {
                reminders.map( (reminder , index) => {
                    return(
                        <li className="list-group-item" key={index}>
                          <div>{reminder.text}</div>
                          <div>{moment(new Date(reminder.date)).calendar()} </div>
                          <button 
                            className='btn btn-primary' 
                            onClick={() => dispatch(remove_Reminder(index))}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </li>
                    )
                })
            }
        </ul>
    )
  }
//##################################################################
const addReminder = (e) => {
  e.preventDefault()
  if(text === '' || date === ''){
    return;
  }
  dispatch(add_Reminder(text , date))
  setDate(new Date())
  setText('')
}
//##################################################################
  return (
    <div className="app">
      <div className="container">
          <h2>What Should U DO ?</h2>
          <form onSubmit={addReminder}>
            <label>Text</label>
            <input 
              value={text} 
              onChange={ (e) => setText(e.target.value)} 
              type='text' 
              className="form-control" 
              placeholder="Enter Text" 
            />
            <label>Date</label>
            <DatePicker
              className="form-control" 
              selected={date}
              value={date}
              onChange={(e) => setDate(e)}
              showTimeSelect
              timeFormat="HH:mm"
              timeCaption="time2"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button 
              className="btn btn-primary w-100 pri"><i className="fal fa-folder-plus"></i>Add Reminder
            </button>
          </form>
          {render_Reminder()}
          <button 
            onClick={() => dispatch(clear_Reminder())} 
            className="btn btn-danger w-100"><i className="fal fa-ban"></i>Clear Reminder
          </button>
      </div>
    </div>
  );
}

export default App;
