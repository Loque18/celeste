/* *~~*~~*~~*~~*~~*~~*~~*~~*~~* internals *~~*~~*~~*~~*~~*~~*~~*~~*~~*~~* */
import { add_contract, set_initialized } from "./store/actions/web3Actions";
import { add_address } from "./store/actions/addressBookActions";
import { initWeb3, initStaticWeb3 } from "./web3";
import store from "./store";

const initCeleste = async options => {
	await initWeb3();

	if (options.rpc) {
		initStaticWeb3(options.rpc);
	}

	const celesteStore = store;
	const { web3 } = celesteStore.getState().web3Reducer;

	const web3s = celesteStore.getState().web3Reducer.web3read;

	if (options.smartContracts) {
		options.smartContracts.forEach(sc => {
			// make a contract instance

			// instantiate smart contract for web3
			const contract = new web3.eth.Contract(sc.abi, sc.address);
			celesteStore.dispatch(add_contract(sc.key, contract));

			const web3read = web3s[options.rpc.chainId];
			const contractRead = new web3read.eth.Contract(sc.abi, sc.address);
			celesteStore.dispatch(add_contract(`${sc.key}_READ`, contractRead));
			// 	const contractRead = new web3read.eth.Contract(
			// 		sc.abi,
			// 		sc.address
			// 	);

			// instantiate smart contract for each web3 read
			// Object.keys(web3s).forEach((key) => {
			// 	const web3read = web3s[key];
			// 	const contractRead = new web3read.eth.Contract(
			// 		sc.abi,
			// 		sc.address
			// 	);
			// 	celesteStore.dispatch(add_contract(sc.key, contractRead));
			// });
		});
	}

	// 		// if (!sc.isMultichain) {
	// 		// const web3read = web3s[key];
	// 		// const contractRead = new web3read.eth.Contract(sc.abi, sc.address);
	// 		// celesteStore.dispatch(add_contract(`${sc.key}_READ`, contract));
	// 		// }

	// 		// for multichain contracts make a contract instance for each address
	// 		// else {
	// 		// 	const chainId = Object.keys(sc.address);

	// 		// 	Object.values(sc.address).forEach((address, i) => {
	// 		// 		const contract = new web3.eth.Contract(sc.abi, address);
	// 		// 		celesteStore.dispatch(
	// 		// 			add_contract(`${sc.key}_${chainId[i]}`, contract)
	// 		// 		);
	// 		// 	});
	// 		// }
	// 	});
	// }

	if (options.addressBook) {
		Object.keys(options.addressBook).forEach(key => {
			const address = options.addressBook[key];
			celesteStore.dispatch(add_address({ key, address }));
		});
	}

	celesteStore.dispatch(set_initialized(true));
};

export {
	initCeleste,
	store,
	// CelesteProvider,
	// ConnectButton,
	// ConnectedWrapper,
	// NetworkWrapper,
	// SwitchNetworkButton,
	// useCelesteStore,
	// useCelesteDispatch,
	// useCelesteSelector
};
