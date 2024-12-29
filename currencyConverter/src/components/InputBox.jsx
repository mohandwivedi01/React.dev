import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrenyChange,
    currencyOptions = [],
    selectedCurrency = "USD",
    amountDisable = false,
    CurrencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-sky-50 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-slate-900 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 bg"
                    type="number"
                    step="any" 
                    placeholder="Amount"
                    disabled= {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-slate-700 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-cyan-50 text-gray-950 cursor-pointer outline-none"
                    disabled={CurrencyDisable}
                    value={selectedCurrency}
                    onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
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
}

export default InputBox;
