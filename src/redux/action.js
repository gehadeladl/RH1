import { ADDREMINDER, REMOVEREMINDER, CLEARREMINDER } from './types';

export const add_Reminder = (text , date) => {
    const action = {
        type : ADDREMINDER , 
        text ,
        date
    }
    return action
}

export const remove_Reminder = (index) => {
    const action = {
        type : REMOVEREMINDER , 
        index
    }
    return action
}

export const clear_Reminder = () => {
    const action = {
        type : CLEARREMINDER , 
    }
    return action
}