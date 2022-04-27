import { TransactionConfig } from '@abacus-network/deploy';
import { ChainMap } from '@abacus-network/sdk';
import { BigNumber } from 'ethers';

export const alfajores: TransactionConfig = {
  confirmations: 1,
  overrides: {},
};

export const fuji: TransactionConfig = {
  confirmations: 1,
  overrides: {},
};

export const goerli: TransactionConfig = {
  confirmations: 3,
  overrides: {
    gasPrice: BigNumber.from(10_000_000_000),
  },
};

export const kovan: TransactionConfig = {
  confirmations: 3,
  overrides: {
    gasPrice: BigNumber.from(10_000_000_000),
    gasLimit: 15_000_000,
  },
};

export const mumbai: TransactionConfig = {
  confirmations: 3,
  overrides: {},
};

export const rinkarby: TransactionConfig = {
  confirmations: 2,
  overrides: {
    gasPrice: 0,
    gasLimit: 600_000_000,
  },
};

export const rinkeby: TransactionConfig = {
  confirmations: 3,
  overrides: {},
};

export const ropsten: TransactionConfig = {
  confirmations: 3,
  overrides: {
    gasPrice: BigNumber.from(10_000_000_000),
  },
};

const _configs = {
  alfajores,
  fuji,
  goerli,
  kovan,
  mumbai,
  rinkarby,
  rinkeby,
  ropsten,
};

export const configs: ChainMap<keyof typeof _configs, TransactionConfig> =
  _configs;
