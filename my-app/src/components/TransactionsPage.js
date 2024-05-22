// src/components/TransactionsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <div className="transactions-grid">
        {transactions.map((transaction) => (
          <div key={transaction._id} className="transaction-card">
            <h3>{transaction.name}</h3>
            <p>Amount: ${transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
