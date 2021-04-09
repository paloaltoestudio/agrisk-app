import historialReducer from './historialReducer';
import formReducer from './formReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    historial: historialReducer,
    formulario: formReducer
});

export default rootReducer