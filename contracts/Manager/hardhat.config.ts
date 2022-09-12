import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: process.env.RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
