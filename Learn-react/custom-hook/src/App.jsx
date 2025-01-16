import { useState } from "react";
import useCurrency from "./hooks/use-currency";
import { InputBox } from "./components/Index";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrency(from);
  const options = Object.keys(data);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * data[to]);
  };
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-500">
      <div className="w-full">
        <div
          className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm
      bg-white/30"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={from}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="bg-blue-600 px-4 py-2 rounded-lg outline-none text-white hover:scale-105
              hover:bg-blue-800 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1">
              <InputBox
                label={to}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full bg-green-600 m-2 rounded-lg px-2 py-1 text-white"
                type="submit"
              >{`Convert ${from.toUpperCase()} To ${to.toUpperCase()}`}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
