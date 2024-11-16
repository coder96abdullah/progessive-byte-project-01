import React from 'react';
import FirstHeading from '../FirstHeading/FirstHeading';
import RecentInvoice from '../RecentInvoice/RecentInvoice';
import RecentBills from '../RecentBills/RecentBills';
import WeeklyStatistic from '../WeeklyStatistic/WeeklyStatistic';
import Meeting from '../Meeting/Meeting';
import LatestIncome from '../LatestIncome/LatestIncome';
import LatestExpence from '../LatestExpence/LatestExpence';
import TotalReveneu from '../TotalReveneu/TotalReveneu';
import Goals from '../Goals/Goals';
import CashFlow from '../CashFlow/CashFlow';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className='px-8'>
          <FirstHeading></FirstHeading> 
          <TotalReveneu></TotalReveneu> 
          <CashFlow></CashFlow>
          <Meeting></Meeting>
          <LatestIncome></LatestIncome>
          <LatestExpence></LatestExpence>
          <RecentInvoice></RecentInvoice>
          <WeeklyStatistic></WeeklyStatistic>
          <RecentBills></RecentBills>        
          <Goals></Goals>
          </div>
     
         
          
        </div>
    );
};

export default Home;