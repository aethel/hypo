export const notaryCosts = (propertyPrice: number): number =>
  2144.0 + 0.013 * (propertyPrice - 100000.0);
export const brokerCosts = (brokerTax: number, propertyPrice: number): number =>
  brokerTax * propertyPrice;
export const stampDutyCosts = (
  cityTax: number,
  propertyPrice: number
): number => cityTax * propertyPrice;
export const totalCost = (
  notaryCosts: number,
  brokerCosts: number,
  stampDutyCosts: number
): number => notaryCosts + brokerCosts + stampDutyCosts;
export const rawLoanAmount = (
  totalCosts: number,
  totalSavings: number,
  propertyPrice: number
): number => totalCosts - totalSavings + propertyPrice;
export const loanToValue = (
  rawLoanAmount: number,
  propertyPrice: number
): number => rawLoanAmount / propertyPrice;
