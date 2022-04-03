import React from "react";
import { initCeleste } from "./lib/store-module";
import ManualTesting from "./manual-testing";

// import nftABI from "./manual-testing/abis/nft.json";
import erc20ABI from "./manual-testing/abis/erc20.json";

import { CelesteProvider } from "./lib";

initCeleste({
	rpc: {
		chainName: "rinkeby",
		chainId: 4,
		url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
	},

	smartContracts: [
		{
			key: "ERC20",
			abi: erc20ABI,
			address: "0x7f4F39690Ac840215d395016F04A1ecC587292fc",
		},
	],
	addressBook: {
		CLT: "0xd0f6d7de98aa4c35ad3d2269529709c4cfd56b7d",
	},
});

const App = () => {
	return (
		<div>
			<CelesteProvider>
				<ManualTesting />
			</CelesteProvider>
		</div>
	);
};

export default App;
