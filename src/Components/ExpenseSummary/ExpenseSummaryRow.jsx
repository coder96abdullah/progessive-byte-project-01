import React from 'react';
import ExpenseSummary from './ExpenseSummary/ExpenseSummary';
import TotalExpense from './TotalExpense';
import Navbar1 from '../../Components/Navbar/Navbar1'

const ExpenseSummaryRow = () => {
    return (
        <div>
            <Navbar1></Navbar1>
           <TotalExpense></TotalExpense>
           <ExpenseSummary></ExpenseSummary> 

        </div>
    );
};

export default ExpenseSummaryRow;