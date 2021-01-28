import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

interface goodsCart {
  (product: string, quantity: number, unitCost: number): action
}
interface deleteGoodsCart {
  (product: string): { type: string, payload: { product: string } }
}
interface action {
  type: string
  payload: { product: string, quantity: number, unitCost: number }
}
interface action1 {
  type: string
  payload: { product: string, }
}

interface dispatch {
  (type: string,
    payload: { product: string, quantity: number, unitCost: number }): any
}

interface asyncAction {

  (dispatch: dispatch): void
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

const deleteFromCart: deleteGoodsCart = function (product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
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
interface hanshu {
  (dispatch: any): void
}
const cartReducer = function (state = initialState, action: action | action1 | any) {
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

const productsReducer = function (state = [], action: action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);


let store = createStore(rootReducer, applyMiddleware(ReduxThunk));

let unsubscribe = store.subscribe(function () {
  console.log("initial state: ", store.getState());
})


store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250))
store.dispatch(updateCart('Flour 1kg', 3, 660))
store.dispatch(deleteFromCart('Juice 2L'))


const asyncAction: asyncAction = function (dispatch: dispatch) {
  setTimeout(() => {
    // dispatch(updateCart('Coffee 500gm', 7, 255))
  }, 2000)
}
store.dispatch(asyncAction);

// unsubscribe()

// interface Ad{
//   (num:)
// }

interface Ad {
  <T>(num: T): T
}

const ad: Ad = function (num) {
  return num
}
console.log(7, ad(3));



