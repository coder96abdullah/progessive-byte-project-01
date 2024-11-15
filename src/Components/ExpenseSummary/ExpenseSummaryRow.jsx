import React from 'react';
import ExpenseSummary from './ExpenseSummary/ExpenseSummary';
import TotalExpense from './TotalExpense';

const ExpenseSummaryRow = () => {
    return (
        <div>
           <TotalExpense></TotalExpense>
           <ExpenseSummary></ExpenseSummary> 

        </div>
    );
};

export default ExpenseSummaryRow;