import { UserId } from '../types/user.types';
import { IPortfolio } from '../types/portfolio.types';
import { mockedPortfolios } from '../mocks/portfolio';

export const getPortfolios = async (userId: UserId): Promise<IPortfolio[]> => {
  console.log('Fetching portfolios for user', userId);
  return Promise.resolve(mockedPortfolios);
}
