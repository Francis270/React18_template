import { ethers } from "ethers";

export class Web3Connect {

    constructor() {
        this.account = "";
        this.provider = null;
        this.network = "";
        this.networks = [
            {id: 1, name: "Ethereum Mainnet", rpc: "https://rpc.ankr.com/eth"},
            {id: 137, name: "Polygon Mainnet", rpc: "https://rpc-mainnet.matic.quiknode.pro"}
        ];
        this.wallets = [];
    }

    init = async () => {
        if (window.ethereum) {
            this.provider = new ethers.providers.Web3Provider(window.ethereum);
            this.accounts = await this.provider.send("eth_requestAccounts", []);

            if (this.accounts) {
                this.account = this.accounts[0];
                this.signer = this.provider.getSigner();
                const { chainId } = await this.provider.getNetwork();
                this.network = chainId;
                return true;
            }
        }
        return false;
    }
    
    getNetwork = () => {
        return this.network;
    }
    
    getNetworks = () => {
        return this.networks;
    }
    
    getConnectedAccount = () => {
        return this.account;
    }
    
    getAccounts = async () => {
        return this.accounts;
    }

    getProviderBalance = async () => {
        const balance = await this.provider.getBalance(this.account);
        const formated = ethers.utils.formatEther(balance);
        
        return formated;
    }

    changeNetwork = async (id) => {
        const iid = parseInt(id);
        const chainId = ethers.utils.hexValue(iid);
        const net = this.networks.find(net => net.id === iid);
        
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: chainId }]
            });
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{ chainId: chainId, chainName: net.name, rpcUrls: [net.rpc] }]
                    });
                } catch (adderr) {
                    console.log(adderr);
                    return false;
                }
            }
        }
        return true;
    }

}
