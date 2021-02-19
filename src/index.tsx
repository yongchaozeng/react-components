import { createStore } from "redux";
// import { createStore } from "./redux";
import ReduxThunk from 'redux-thunk';
import exercise12 from './exercise/exercise12'
console.log(666,exercise12)
// exercise()
const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
type ActionType = 'ADD_TO_CART' | 'UPDATE_CART' | 'DELETE_FROM_CART'

interface goodsCart {
  <T, K, P>(product: T, quantity?: K, unitCost?: P): Action<T, K, P>
}

interface Action<T = string, K = number, P = number> {
  type: ActionType,
  payload: { product: T, quantity?: K, unitCost?: P }
}

interface Action1<T = string> {
  type: ActionType,
  payload: { product: T }
}


const addToCart: goodsCart = function (product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

const updateCart: goodsCart = function (product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

const cartReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {

      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {

      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }
    default:
      return state
  }
}



let store = createStore(cartReducer);
let unSubScribe = store.subscribe(function () {
  console.log("initial state: ", store.getState());
})

// console.log(store.getState());
store.dispatch(addToCart('Coffee 500gm', 1, 250));

store.dispatch(updateCart('Coffee 500gm', 3, 660))


store.dispatch(addToCart('香蕉 1斤', 2, 700));
// console.log(store.getState());

unSubScribe()




