"use client"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './styles/search.css';
import 'react-tabs/style/react-tabs.css';

export default function Index() {
  const renderAbout = () => {
    return (
      <text>
        Welcome to LCT!<br />
        LCT will help increase your score.
      </text>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='container mx-auto'>
        {renderAbout()}
      </div>
    </main>
  );
}
