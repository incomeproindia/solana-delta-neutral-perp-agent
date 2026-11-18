export const DRIFT_CONFIG = {
  rpcEndpoint: "https://api.devnet.solana.com",
  marketIndex: 0, // SOL-PERP
  targetDelta: 0.0, // Strictly delta neutral
  minFundingRateApy: 12.0, // Minimum annualized funding to open position
  maxLeverage: 1.5,
  minHealthMarginBps: 2000 // 20% buffer above maintenance margin
};
