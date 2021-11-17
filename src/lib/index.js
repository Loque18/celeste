
import store from './store';
import { initWeb3 } from './web3';

import CelesteProvider from './components/celeste-provider';
import ConnectButton from './components/connect-button';
initWeb3(store);





export { CelesteProvider, ConnectButton };

// import react from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'lib/components/button';

// ReactDOM.render(
//     <Button />,
//     document.getElementById('root')
// );
