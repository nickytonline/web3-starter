import { BaseProvider } from '@metamask/providers';
import { NetworkInfo } from '@types/NetworkInfo';

declare global {
  interface Window {
    ethereum: BaseProvider & NetworkInfo;
  }
}
