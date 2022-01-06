import React from 'react';
import { initCeleste } from './lib/store-module';
import ManualTesting from './manual-testing';

import nftABI from './manual-testing/abis/nft.json';
import erc20ABI from './manual-testing/abis/erc20.json';

import {
    CelesteProvider,   
} from './lib';


initCeleste({
    rpcs: [
        {
            chainId: 97,
            url: 'https://api.s0.b.hmny.io'
        }
    ],
    smartContracts: [
        {
            key: 'ERC20',
            abi: erc20ABI,
            address: '0xbbE3189fe14754EDF7EA25CEE259a16d8b154B80',
            isMultichain: false
        }
    ],
    addressBook: {
        ERC721: '0xd0f6d7de98aa4c35ad3d2269529709c4cfd56b7d'
    }
});

const App = () => {
    return(
        <div>
            <CelesteProvider>
                <ManualTesting />
            </CelesteProvider>
        </div>
    );
}

export default App;