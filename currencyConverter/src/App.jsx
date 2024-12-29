import { useState } from 'react'
import { InputBox } from './components'
import useCureencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFrom] = useState("usd");
  const [toCurrency, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCureencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(toCurrency)
    setTo(fromCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  return(
  <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
      backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  }}
  >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-90 rounded-lg p-10 backdrop-blur-sm bg-black/50">
      <h1 className='text-green-500 text-center mb-5 text-3xl font-bold'>Currency Converter</h1>
        <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrenyChange={(currency) => setAmount(amount)}
                selectedCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              /> 
            </div>
            <div className="relative w-full h-0.5">
              <button 
                type='button'
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrenyChange={(currency) => setTo(currency)}
                selectedCurrency={toCurrency}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg">
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
        </form>  
      </div>
    </div>
  </div>

  )
}


export default App
