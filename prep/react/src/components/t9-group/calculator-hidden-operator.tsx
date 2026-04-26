import { useState } from "react";

const OPERATORS = { A: "+", B: "-", C: "*" } as const;
type Op = keyof typeof OPERATORS;

export function HiddenOperatorCalculator() {
  const [tokens, setTokens] = useState<string[]>([]); // Array to hold the expression
  const [result, setResult] = useState<number | null>(null);
  console.log({ tokens, result });

  const last = tokens[tokens.length - 1];
  const isOp = (t: string) => t in OPERATORS;

  const addDigit = (d: string) => {
    if (last !== undefined && !isOp(last)) return;
    setTokens((prev) => [...prev, d]);
    setResult(null);
  };

  const addOperator = (op: Op) => {
    if (tokens.length === 0 || isOp(last)) return;
    setTokens((prev) => [...prev, op]);
    setResult(null);
  };

  const backspace = () => {
    setTokens((prev) => prev.slice(0, -1));
    setResult(null);
  };

  const clearAll = () => {
    setTokens([]);
    setResult(null);
  };

  const calculate = () => {
    if (tokens.length === 0) return;
    const clean = isOp(last) ? tokens.slice(0, -1) : tokens;
    const expr = clean.map((t) => OPERATORS[t as Op] ?? t).join("");
    setResult(eval(expr));
  };

  const display = tokens.map((t) => OPERATORS[t as Op] ?? t).join(" ") || "0";

  return (
    <div className="flex justify-center p-8">
      <div className="w-72 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* display */}
        <div className="mb-1 min-h-14 rounded-xl bg-gray-100 p-3 text-right font-mono text-2xl font-medium text-gray-900 break-all">
          {display}
        </div>

        {/* result */}
        <div className="mb-4 h-5 text-right font-mono text-sm text-green-600">
          {result !== null ? `= ${result}` : ""}
        </div>

        {/* buttons */}
        <div className="grid grid-cols-4 gap-2">
          {(["7", "8", "9"] as const).map((d) => (
            <button
              key={d}
              onClick={() => addDigit(d)}
              className="rounded-xl border border-gray-200 bg-white py-4 text-base font-medium hover:bg-gray-50 active:scale-95"
            >
              {d}
            </button>
          ))}
          <button
            onClick={() => addOperator("A")}
            className="rounded-xl border border-amber-300 bg-amber-50 py-4 text-base font-medium text-amber-800 hover:bg-amber-100 active:scale-95"
          >
            A
          </button>

          {(["4", "5", "6"] as const).map((d) => (
            <button
              key={d}
              onClick={() => addDigit(d)}
              className="rounded-xl border border-gray-200 bg-white py-4 text-base font-medium hover:bg-gray-50 active:scale-95"
            >
              {d}
            </button>
          ))}
          <button
            onClick={() => addOperator("B")}
            className="rounded-xl border border-amber-300 bg-amber-50 py-4 text-base font-medium text-amber-800 hover:bg-amber-100 active:scale-95"
          >
            B
          </button>

          {(["1", "2", "3"] as const).map((d) => (
            <button
              key={d}
              onClick={() => addDigit(d)}
              className="rounded-xl border border-gray-200 bg-white py-4 text-base font-medium hover:bg-gray-50 active:scale-95"
            >
              {d}
            </button>
          ))}
          <button
            onClick={() => addOperator("C")}
            className="rounded-xl border border-amber-300 bg-amber-50 py-4 text-base font-medium text-amber-800 hover:bg-amber-100 active:scale-95"
          >
            C
          </button>

          <button
            onClick={() => addDigit("0")}
            className="rounded-xl border border-gray-200 bg-white py-4 text-base font-medium hover:bg-gray-50 active:scale-95"
          >
            0
          </button>
          <button
            onClick={backspace}
            className="rounded-xl border border-red-200 bg-red-50 py-4 text-base font-medium text-red-600 hover:bg-red-100 active:scale-95"
          >
            ←
          </button>
          <button
            onClick={clearAll}
            className="rounded-xl border border-red-200 bg-red-50 py-4 text-base font-medium text-red-600 hover:bg-red-100 active:scale-95"
          >
            CLR
          </button>
          <button
            onClick={calculate}
            className="col-span-4 rounded-xl border border-green-300 bg-green-50 py-4 text-base font-medium text-green-700 hover:bg-green-100 active:scale-95"
          >
            =
          </button>
        </div>

        {/* legend */}
        <div className="mt-4 flex justify-center gap-4 border-t border-gray-100 pt-3 text-sm text-gray-400">
          <span>
            <span className="font-medium text-gray-600">A</span> = +
          </span>
          <span>
            <span className="font-medium text-gray-600">B</span> = −
          </span>
          <span>
            <span className="font-medium text-gray-600">C</span> = ×
          </span>
        </div>
      </div>
    </div>
  );
}
