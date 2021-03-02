const SET_INFO = "SET_INFO"

interface State {
  firstName: string
  lastName: string
  city: string
}

interface Action {
  type: string
  payload?: any 
}

const initialState: State = {
  firstName: '',
  lastName: '',
  city: ''
}

export default function infoReducer (state = initialState, action: Action): State {
  switch(action.type) {
    case SET_INFO:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        city: action.payload.city
      }
    default:
      return state
  }
}

export const setInfo = (state: State) => ({ type: SET_INFO, payload: state })