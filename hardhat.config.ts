import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, LISK_SEPOLIA_URL, ARC_TESTNET_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    liskSepolia: {
      url: LISK_SEPOLIA_URL!,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    arc: {
      url: ARC_TESTNET_URL!,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },

  etherscan: {
    apiKey: {
      liskSepolia: "empty", // optional if you don’t plan verification
      arc: "empty",
    },
    customChains: [
      {
        network: "liskSepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
      {
        network: "arc",
        chainId: 5042002,
        urls: {
          apiURL: "https://rpc.testnet.arc.network",
          browserURL: "https://rpc.testnet.arc.network",
        },
      },
    ],
  },
};

export default config;