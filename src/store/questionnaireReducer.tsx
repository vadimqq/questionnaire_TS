
const SET_AGE = "SET_AGE"
const SET_LANGUAGES = "SET_LANGUAGES"

interface State {
  age: string
  languages: string[]
}

interface Action {
  type: string
  payload?: any 
}

const initialState: State = {
  age: '',
  languages: []
}

export default function questionnaireReducer (state = initialState, action: Action): State {
  switch(action.type) {
    case SET_AGE:
      return {
        ...state,
        age: action.payload
      }
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      }
    default:
      return state
  }
}

export const setAge = (age: string) => ({ type: SET_AGE, payload: age })

export const setLenguages = (languages: string[]) => ({ type: SET_LANGUAGES, payload: languages })