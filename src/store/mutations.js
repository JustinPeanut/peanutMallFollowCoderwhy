import {ADD_COUNTER,ADD_TO_PUSH} from './consant'
export default {
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_PUSH](state,payload){
    state.cartList.push(payload)
  }
}
