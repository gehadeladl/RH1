import { createStore } from "redux";
import { reminders } from './reduser';

const initialState = []

const store = createStore(reminders , initialState)
export default store;