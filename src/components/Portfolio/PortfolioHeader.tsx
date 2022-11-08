import './portfolio.scss';

interface IParams {
  clicked: Function;
}

export const PortfolioHeader = ({ clicked }: IParams) => {
  return (
    <div id='portfolioHeader'>
      <div className='columnShort' onClick={() => clicked('ticker')}>Ticker</div>
      <div className='column' onClick={() => clicked('name')}>Name</div>
      <div className='columnShort' onClick={() => clicked('position')}>Position</div>
      <div className='columnShort' onClick={() => clicked('costAverage')}>Cost average</div>
      <div className='columnShort' onClick={() => clicked('currency')}>Currency</div>
      <div className='columnShort'>Current value</div>
      <div className='columnShort'>Change</div>
    </div>
  )
}
