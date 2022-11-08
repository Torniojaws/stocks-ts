import { IPortfolio } from '../types/portfolio.types';

export const mockedPortfolios: IPortfolio[] = [
  {
    portfolioName: 'My example portfolio',
    stocks: [
      { ticker: 'SAMPO.HE', name: 'Sampo', position: 9999, costAverage: 40.4, costAverageCurrency: 'EUR', currency: 'EUR' },
      { ticker: 'FSR', name: 'Fisker', position: 7777, costAverage: 6.66, costAverageCurrency: 'EUR', currency: 'USD' },
      { ticker: 'RC', name: 'Ready Capital', position: 5555, costAverage: 13.37, costAverageCurrency: 'EUR', currency: 'USD' },
    ]
  },
  {
    portfolioName: 'A second portfolio',
    stocks: [
      { ticker: 'CTY1S.HE', name: 'Citycon', position: 5000, costAverage: 6, costAverageCurrency: 'EUR', currency: 'EUR' },
      { ticker: 'NDA-FI.HE', name: 'Nordea', position: 121212, costAverage: 8.5, costAverageCurrency: 'EUR', currency: 'EUR' },
      { ticker: 'SAMPO.HE', name: 'Sampo', position: 6789, costAverage: 40.5, costAverageCurrency: 'EUR', currency: 'EUR' },
      { ticker: 'TITAN.HE', name: 'Titanium', position: 9876, costAverage: 13.37, costAverageCurrency: 'EUR', currency: 'EUR' },
    ]
  }
];
