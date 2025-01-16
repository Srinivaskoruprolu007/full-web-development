import PropTypes from "prop-types";
import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div
      className={` bg-black p-3 rounded-lg  text-sm shadow-lg  flex ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={id} className="text-white/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-white"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 fle flex-wrap justify-end text-right">
        <p className="mb-2 text-gray-400">Currency Type</p>
        <select
          className="rounded-lg py-1 px-1 bg-gray-300 cursor-pointer outline-none max-h-full"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCurrency: PropTypes.string,
  amountDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
