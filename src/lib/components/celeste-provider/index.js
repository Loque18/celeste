import React from 'react'
import store from '../../store';
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

const MyContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(MyContext);
export const useDispatch = createDispatchHook(MyContext);
export const useSelector = createSelectorHook(MyContext);

const CelesteProvider= props => {

    

    return (
        <Provider context={MyContext} store={store}>
            {props.children}
        </Provider>
    )
}

export default CelesteProvider;