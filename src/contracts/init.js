import { DAppClientOptions, NetworkType } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit, MichelCodecPacker } from '@taquito/taquito';
import { NETWORK, RPC_URL } from '../global';



export const initTezos = (url = RPC_URL) => {
    tezos = new TezosToolkit(url);
    tezos.setPackerProvider(new MichelCodecPacker());
};

export const initWallet = () => {
    const options = {
        name: 'Kanvas',
        iconUrl: 'https://tezostaquito.io/img/favicon.png',
        preferredNetwork: NetworkType[NETWORK],
    };

    return new BeaconWallet(options);
};

export const setWalletProvider = (wallet) => {
    tezos && tezos.setProvider({ wallet });
};
