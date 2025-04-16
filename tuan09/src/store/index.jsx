// src/store/index.js hoặc index.jsx
import { createStore } from 'redux';
import counterReducer from './ounterReducer'; // ✅ đường dẫn đúng

const store = createStore(counterReducer);

export default store;
