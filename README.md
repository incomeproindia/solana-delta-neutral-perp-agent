# Solana Delta-Neutral Basis Trading Agent ⚖️

An autonomous, risk-minimized hedge fund capital agent operating on **Drift Protocol v2** and **Kamino Finance**.

## 🎯 Mathematical Architecture
- **Zero Directional Exposure:** Holds simultaneously $+1.0\times$ Spot SOL and $-1.0\times$ Drift SOL-PERP.
- **Funding Rate Capture:** Continuously collects premium funding payments during positive perp rate environments.
- **Auto-Hedging & Margin Safety:** Rebalances collateral dynamically if health score drops below 150%.

## 🚀 Devnet Simulation
```bash
npm install
npm run simulate
```

Developed for the **OOBE Protocol Superteam Autonomous Capital Agent Challenge**.
