import {
  GoerliNetworkId,
  KovanNetworkId,
  MainnetNetworkId,
  RinkebyNetworkId,
  RopstenNetworkId,
} from '../utilities/NetworkIds';

export type EthereumNetwork =
  | typeof MainnetNetworkId
  | typeof KovanNetworkId
  | typeof RopstenNetworkId
  | typeof RinkebyNetworkId
  | typeof GoerliNetworkId;

export interface NetworkInfo {
  chainId: string; // Ethereum chain id in hexadecimal
  networkVersion: EthereumNetwork;
}
