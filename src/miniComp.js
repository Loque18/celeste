// import { useEffect } from "react";

// import { useCelesteSelector, useCelesteDispatch } from "./lib";

// const Comp = props => {

//     const {web3Reducer, walletReducer} = useCelesteSelector(state => state);
    

//     useEffect(
//         () => {
            
            
//         }, [web3Reducer]
//     );

//     const onClick = () => {

//         if (!web3Reducer.initialized || walletReducer.currentAccount == null) return;
//         const contracts = web3Reducer.contracts;

//         const contract = contracts[`TEST_MULTICHAIN_${walletReducer.networkId}`];

//         console.log(walletReducer.networkId);
        
//         const tx = contract.methods.store(1);

//         try{
//             tx.send({from: walletReducer.currentAccount});
//         }
//         catch(e){
//             console.log(e);
//         }
   
        
//     }

//     return (
//         <button onClick={onClick}>Click</button>
//     );
// }

// export default Comp;