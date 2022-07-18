

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrenty}) => {
  return (
    <div className='exchange-rate'>
      <h3>Exchange Rate</h3>
      <h1>{exchangeRate}</h1>
      <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrenty} </p>
    </div>
  )
}

export default ExchangeRate