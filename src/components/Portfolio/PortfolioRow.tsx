import { Stock } from '../../types/portfolio.types';
import './portfolio.scss';

interface IParams {
  stock: Stock;
}

export const PortfolioRow = ({ stock }: IParams) => {
  return (
    <div id='portfolioRow'>
      <div className='columnShort'>{stock.ticker}</div>
      <div className='column'>{stock.name}</div>
      <div className='columnShort'>{stock.position}</div>
      <div className='columnShort'>{stock.costAverage} {stock.costAverageCurrency}</div>
      <div className='columnShort'>{stock.currency}</div>
      <div className='columnShort'>123</div>
      <div className='columnShort'>+5 %</div>
    </div>
  )
}
