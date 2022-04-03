import React, { useEffect, useState } from "react";

import {
	ConnectButton,
	DisconnectButton,
	ConnectedWrapper,
	NetworkWrapper,
	SwitchNetworkButton,
	useCelesteSelector,
} from "../lib";

const ManualTesting = () => {
	const { web3Reducer } = useCelesteSelector(state => state);

	const [someData, setSomeData] = useState({});

	useEffect(() => {
		if (!web3Reducer.initialized) return;

		const contract = web3Reducer.contracts.ERC20_READ;

		(async () => {
			const balane = await contract.methods
				.balanceOf("0x327864708eA978ce473E02900755c2746c0Cb7dd")
				.call();
			setSomeData(balane);
		})();
	}, [web3Reducer]);

	return (
		<div>
			<ConnectButton type="submit" />
			<DisconnectButton />
			<ConnectedWrapper
				disconnectedComponent={
					<div>
						Please connect to join the pary{" "}
						<img
							src="https://w7.pngwing.com/pngs/702/271/png-transparent-sesame-street-elmo-illustration-elmo-ernie-cookie-monster-big-bird-cookie-face-people-flower.png"
							alt=""
							width="24"
						/>
					</div>
				}
			>
				<NetworkWrapper
					chainId={4}
					info={
						<SwitchNetworkButton chainId={4}>
							Switch to rinkeby
						</SwitchNetworkButton>
					}
				>
					<h1>Welcome to the party, take a dring 🍺 and enjoy!</h1>
					<img
						src="https://c.tenor.com/9nrf4l-x4uwAAAAd/elmo-rusia.gif"
						alt=""
					/>
				</NetworkWrapper>
			</ConnectedWrapper>

			<div>
				<h1 style={{ color: "red" }} className="subtitle">
					{" "}
					web3 read data{" "}
				</h1>
				{someData ? (
					<div>
						balance of 0x327864708eA978ce473E02900755c2746c0Cb7dd:{" "}
						{someData / 10 ** 18}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ManualTesting;

// // Check if connection is already established
// if (!connector.connected) {
//     // create new session
//     connector.createSession();
//   }

//   // Subscribe to connection events
//   connector.on("connect", (error, payload) => {
//     if (error) {
//       throw error;
//     }

//     // Get provided accounts and chainId
//     const { accounts, chainId } = payload.params[0];
//     console.log(accounts);
//   });

//   connector.on("session_update", (error, payload) => {
//     if (error) {
//       throw error;
//     }

//     // Get updated accounts and chainId
//     const { accounts, chainId } = payload.params[0];
//   });

//   connector.on("disconnect", (error, payload) => {
//     if (error) {
//       throw error;
//     }

//     // Delete connector
//   });
