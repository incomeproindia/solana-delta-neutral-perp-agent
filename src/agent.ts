import { FundingArbitrageStrategy } from "./strategies/funding_arbitrage";

export class DeltaNeutralAgent {
  private strategy = new FundingArbitrageStrategy();

  public monitorMarkets() {
    const evaluation = this.strategy.evaluateBasis(212.0, 212.8, 16.4);
    console.log(`[Delta Neutral Agent] Funding Rate APY: ${evaluation.annualizedYield}% | Basis Spread: ${evaluation.basisSpread}%`);
  }
}

if (require.main === module) {
  new DeltaNeutralAgent().monitorMarkets();
}
