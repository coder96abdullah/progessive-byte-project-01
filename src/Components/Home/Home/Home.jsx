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

const Home = () => {
    return (
        <div className='px-8'>
          <FirstHeading></FirstHeading>  
          <RecentInvoice></RecentInvoice>
          <RecentBills></RecentBills>
          <WeeklyStatistic></WeeklyStatistic>
          <Meeting></Meeting>
          <LatestIncome></LatestIncome>
          <LatestExpence></LatestExpence>
          <Goals></Goals>
          <CashFlow></CashFlow>
          <TotalReveneu></TotalReveneu>
        </div>
    );
};

export default Home;