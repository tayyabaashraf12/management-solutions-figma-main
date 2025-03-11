import React from "react";

interface Transaction {
  from: string;
  to: string;
  value: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <table className="w-full border border-gray-300 mt-2">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">From</th>
          <th className="border p-2">To</th>
          <th className="border p-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.slice(0, 6).map((tx, index) => (
          <tr key={index} className="text-center">
            <td className="border p-2">
              {tx.from.slice(0, 10)}...{tx.from.slice(-4)}
            </td>
            <td className="border p-2">
              {tx.to.slice(0, 10)}...{tx.to.slice(-4)}
            </td>
            <td className="border p-2">
              {(Number(tx.value) / 1e18).toFixed(4)} BNB
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
