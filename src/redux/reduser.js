import { ADDREMINDER, REMOVEREMINDER, CLEARREMINDER } from './types';
import { bake_cookie, read_cookie } from 'sfcookies'
export const reminders = (state , action) => {

    let reminders = null;
    state = read_cookie('reminders')
    if(action.type === ADDREMINDER){
        reminders = [...state , {text : action.text , date : action.date}]
        bake_cookie('reminders' , reminders)
        return reminders;
    }
    else if(action.type === REMOVEREMINDER){
        reminders = state.filter((reminders , index) => index !== action.index)
        bake_cookie('reminders' , reminders)
        return reminders;
    }
    else if(action.type === CLEARREMINDER){
        reminders = []
        bake_cookie('reminders' , reminders)
        return reminders;
    }
    return state;
}