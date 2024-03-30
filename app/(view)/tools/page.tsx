"use client"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './styles/tools.css';
import 'react-tabs/style/react-tabs.css';
import OvertimeBonusCalculator from './_component/OvertimeBonusCalculater/OvertimeBonusCalculator';
import { useState } from 'react';
import ScrapSoldCalculater from './_component/ScrapSoldCalculater/ScrapSoldCalculater';

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='container mx-auto'>
        <Tabs>
          <TabList>
            <Tab>Calculate Overtime bonus</Tab>
            <Tab>Calculate Money</Tab>
          </TabList>

          <TabPanel>
            <OvertimeBonusCalculator />
          </TabPanel>
          <TabPanel>
            <ScrapSoldCalculater />
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
}