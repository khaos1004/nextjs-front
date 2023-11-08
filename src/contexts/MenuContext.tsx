// store.js
import { applyMiddleware } from 'redux';
import { createStoreHook } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '@reduxjs/toolkit'; // 여러분의 리듀서를 불러옵니다.

// 스토어의 초기 상태를 설정합니다.
const initialState = {};

// 미들웨어와 함께 스토어를 생성하는 함수를 정의합니다.
// const makeStore = () => createStoreHook(reducers, initialState, applyMiddleware(thunk));

// next-redux-wrapper의 createWrapper 함수를 사용하여 스토어를 생성합니다.
// export const wrapper = createWrapper(makeStore, { debug: true });
