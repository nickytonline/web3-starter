import { BaseProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: BaseProvider;
  }
}
