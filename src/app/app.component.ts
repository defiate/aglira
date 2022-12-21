import { Component } from '@angular/core';
import { ethers } from 'ethers';
import lendingPoolJson from '../assets/LendingPool.json';
import { GlobalComponent } from './global-component';

declare global {
  interface Window {
    ethereum: any;
  }
}
const AGLIRA_ADDRESS = '';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  provider: any | undefined;
  signer: any | undefined;
  accounts: any | undefined;
  wallet: ethers.Wallet | undefined;
  title = 'agLIRA';
  agLiraContract: ethers.Contract | undefined;
  agLiraAddress: string | undefined;
  signerAddress: string | undefined;

  menuItems = [
    { title: 'Home', route: '' },
    { title: 'Borrow', route: '/borrow' },
    { title: 'Collateral', route: '/collateral' },
    { title: 'OnRamp/OffRamp', route: '/onrampofframp' },
  ]

  async connectWallet() {
    GlobalComponent.loggedIn = true;
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.agLiraAddress = AGLIRA_ADDRESS;
    await this.provider.send('eth_requestAccounts', []);
    this.accounts = await this.provider.listAccounts();
    this.signer = await this.provider.getSigner();
    this.signerAddress = await this.signer.getAddress();
    this.agLiraContract = new ethers.Contract(
      this.agLiraAddress,
      lendingPoolJson.abi,
      this.signer
    );
    // get info after wallet is connected:

    // this.updateInfo();
  }

}
