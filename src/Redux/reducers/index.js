import {combinedReducers} from 'react-redux'
import {rootReducer} from './rootReducer'

const reducers = combinedReducers({
    allItems: rootReducer
})