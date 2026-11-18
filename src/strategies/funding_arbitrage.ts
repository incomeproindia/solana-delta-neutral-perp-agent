import { DRIFT_CONFIG } from "../config";

export class FundingArbitrageStrategy {
  public calculateAnnualizedFunding(hourlyRate: number): number {
    return hourlyRate * 24 * 365 * 100;
  }

  public evaluateBasis(spotPrice: number, perpPrice: number, fundingApy: number) {
    const basisSpread = ((perpPrice - spotPrice) / spotPrice) * 100;
    return {
      isProfitable: fundingApy >= DRIFT_CONFIG.minFundingRateApy,
      basisSpread: basisSpread.toFixed(3),
      annualizedYield: fundingApy.toFixed(2)
    };
  }
}
