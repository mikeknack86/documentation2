import ccipLogo from "../assets/products/ccip-logo.svg"
import vrfLogo from "../assets/products/vrf-logo.svg"
import functionsLogo from "../assets/products/functions-logo.svg"
import automationLogo from "../assets/products/automation-logo.svg"
import dataFeedsLogo from "../assets/products/data-feeds-logo.svg"
import dataStreamsLogo from "../assets/products/data-streams-logo.svg"

export interface ProductData {
  learnMoreLink: string
  logo: { src: string }
  chains: Record<string, string>
}

export interface ProductChainLinks {
  [key: string]: ProductData | { [chainId: string]: string }
}

export const productChainLinks: ProductChainLinks = {
  CCIP: {
    learnMoreLink: "ccip",
    logo: ccipLogo,
    chains: {
      arbitrum: "/ccip/directory/mainnet/chain/ethereum-mainnet-arbitrum-1",
      avalanche: "/ccip/directory/mainnet/chain/avalanche-mainnet",
      "bnb-chain": "/ccip/directory/mainnet/chain/bsc-mainnet",
      celo: "/ccip/directory/mainnet/chain/celo-mainnet",
      "gnosis-chain": "/ccip/directory/mainnet/chain/xdai-mainnet",
      base: "/ccip/directory/mainnet/chain/ethereum-mainnet-base-1",
      blast: "/ccip/directory/mainnet/chain/ethereum-mainnet-blast-1",
      ethereum: "/ccip/directory/mainnet/chain/mainnet",
      kroma: "/ccip/directory/mainnet/chain/ethereum-mainnet-kroma-1",
      optimism: "/ccip/directory/mainnet/chain/ethereum-mainnet-optimism-1",
      polygon: "/ccip/directory/mainnet/chain/matic-mainnet",
      wemix: "/ccip/directory/mainnet/chain/wemix-mainnet",
      mode: "/ccip/directory/mainnet/chain/ethereum-mainnet-mode-1",
      metis: "/ccip/directory/mainnet/chain/ethereum-mainnet-andromeda-1",
      zksync: "/ccip/directory/mainnet/chain/ethereum-mainnet-zksync-1",
      linea: "/ccip/directory/mainnet/chain/ethereum-mainnet-linea-1",
      scroll: "/ccip/directory/mainnet/chain/ethereum-mainnet-scroll-1",
      soneium: "/ccip/directory/testnet/chain/ethereum-testnet-sepolia-soneium-1",
    },
  },
  "Data Feeds": {
    learnMoreLink: "data-feeds",
    logo: dataFeedsLogo,
    chains: {
      arbitrum: "/data-feeds/price-feeds/addresses?network=arbitrum",
      avalanche: "/data-feeds/price-feeds/addresses?network=avalanche",
      base: "/data-feeds/price-feeds/addresses?network=base",
      "bnb-chain": "/data-feeds/price-feeds/addresses?network=bnb-chain",
      celo: "/data-feeds/price-feeds/addresses?network=celo",
      ethereum: "/data-feeds/price-feeds/addresses?network=ethereum",
      fantom: "/data-feeds/price-feeds/addresses?network=fantom",
      "gnosis-chain": "/data-feeds/price-feeds/addresses?network=gnosis-chain",
      hedera: "/data-feeds/price-feeds/addresses?network=hedera",
      linea: "/data-feeds/price-feeds/addresses?network=linea",
      metis: "/data-feeds/price-feeds/addresses?network=metis",
      moonbeam: "/data-feeds/price-feeds/addresses?network=moonbeam",
      moonriver: "/data-feeds/price-feeds/addresses?network=moonriver",
      optimism: "/data-feeds/price-feeds/addresses?network=optimism",
      polygonzkevm: "/data-feeds/price-feeds/addresses?network=polygonzkevm",
      polygon: "/data-feeds/price-feeds/addresses?network=polygon",
      scroll: "/data-feeds/price-feeds/addresses?network=scroll",
      solana: "/data-feeds/price-feeds/addresses?network=solana",
      soneium: "/data-feeds/price-feeds/addresses?network=soneium",
      starknet: "/data-feeds/price-feeds/addresses?network=starknet",
      zksync: "/data-feeds/price-feeds/addresses?network=zksync",
    },
  },
  "Data Streams": {
    learnMoreLink: "data-streams",
    logo: dataStreamsLogo,
    chains: {
      arbitrum: "/data-streams/crypto-streams",
      avalanche: "/data-streams/crypto-streams",
      base: "/data-streams/crypto-streams",
      soneium: "/data-streams/crypto-streams",
      opbnb: "/data-streams/crypto-streams",
      solana: "/data-streams/crypto-streams",
    },
  },
  Functions: {
    learnMoreLink: "chainlink-functions",
    logo: functionsLogo,
    chains: {
      arbitrum: "/chainlink-functions/supported-networks#arbitrum",
      avalanche: "/chainlink-functions/supported-networks#avalanche",
      base: "/chainlink-functions/supported-networks#base",
      ethereum: "/chainlink-functions/supported-networks#ethereum",
      optimism: "/chainlink-functions/supported-networks#optimism",
      polygon: "/chainlink-functions/supported-networks#polygon",
      soneium: "/chainlink-functions/supported-networks#soneium",
    },
  },
  Automation: {
    learnMoreLink: "chainlink-automation",
    logo: automationLogo,
    chains: {
      arbitrum: "/chainlink-automation/overview/supported-networks#arbitrum",
      avalanche: "/chainlink-automation/overview/supported-networks#avalanche-mainnet",
      base: "/chainlink-automation/overview/supported-networks#base",
      "bnb-chain": "/chainlink-automation/overview/supported-networks#bnb-chain",
      ethereum: "/chainlink-automation/overview/supported-networks#ethereum",
      fantom: "/chainlink-automation/overview/supported-networks#fantom",
      "gnosis-chain": "/chainlink-automation/overview/supported-networks#gnosis-chain-xdai",
      optimism: "/chainlink-automation/overview/supported-networks#optimism",
      polygon: "/chainlink-automation/overview/supported-networks#polygon",
    },
  },
  VRF: {
    learnMoreLink: "vrf",
    logo: vrfLogo,
    chains: {
      arbitrum: "/vrf/v2-5/supported-networks#arbitrum-mainnet",
      avalanche: "/vrf/v2-5/supported-networks#avalanche-mainnet",
      "bnb-chain": "/vrf/v2-5/supported-networks#bnb-chain",
      ethereum: "/vrf/v2-5/supported-networks#ethereum-mainnet",
      fantom: "/vrf/v2/subscription/supported-networks#fantom-mainnet",
      polygon: "/vrf/v2-5/supported-networks#polygon-mainnet",
      base: "/vrf/v2-5/supported-networks#base-mainnet",
      soneium: "/vrf/v2-5/supported-networks#soneium-minato-testnet",
    },
  },
  linkTokenContracts: {
    arbitrum: "/resources/link-token-contracts#arbitrum",
    avalanche: "/resources/link-token-contracts#avalanche",
    base: "/resources/link-token-contracts#base",
    "bnb-chain": "/resources/link-token-contracts#bnb-chain",
    blast: "/resources/link-token-contracts#blast",
    celo: "/resources/link-token-contracts#celo",
    ethereum: "/resources/link-token-contracts#ethereum",
    fantom: "/resources/link-token-contracts#fantom",
    "gnosis-chain": "/resources/link-token-contracts#gnosis-chain-xdai",
    hedera: "/resources/link-token-contracts#hedera",
    kroma: "/resources/link-token-contracts#kroma",
    linea: "/resources/link-token-contracts#linea",
    metis: "/resources/link-token-contracts#metis",
    mode: "/resources/link-token-contracts#mode",
    moonbeam: "/resources/link-token-contracts#moonbeam",
    moonriver: "/resources/link-token-contracts#moonriver",
    optimism: "/resources/link-token-contracts#optimism",
    polygonzkevm: "/resources/link-token-contracts#polygon-zkevm",
    polygon: "/resources/link-token-contracts#polygon",
    scroll: "/resources/link-token-contracts#scroll",
    solana: "/resources/link-token-contracts#solana",
    soneium: "/resources/link-token-contracts#soneium",
    wemix: "/resources/link-token-contracts#wemix",
    zksync: "/resources/link-token-contracts#zksync",
  },
}

export const chainNames: Record<string, string> = {
  arbitrum: "Arbitrum",
  avalanche: "Avalanche",
  base: "Base",
  "bnb-chain": "BNB Chain",
  celo: "Celo",
  ethereum: "Ethereum",
  fantom: "Fantom",
  "gnosis-chain": "Gnosis Chain",
  hedera: "Hedera",
  kroma: "Kroma",
  linea: "Linea",
  metis: "Metis",
  moonbeam: "Moonbeam",
  moonriver: "Moonriver",
  opbnb: "opBNB",
  optimism: "Optimism",
  polygonzkevm: "Polygon zkEVM",
  polygon: "Polygon",
  scroll: "Scroll",
  solana: "Solana",
  soneium: "Soneium",
  starknet: "Starknet",
  wemix: "Wemix",
  zksync: "ZKsync",
  mode: "Mode",
  blast: "Blast",
}
