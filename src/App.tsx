import React, { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Landing } from './components/screens/Landing';
import { ScenarioBuilder } from './components/screens/ScenarioBuilder';
import { Dashboard } from './components/screens/Dashboard';
import { ExecutiveSummary } from './components/screens/ExecutiveSummary';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('landing');

  const handleStart = () => {
    setActiveTab('scenario');
  };

  const handleScenarioComplete = () => {
    setActiveTab('dashboard');
  };

  if (activeTab === 'landing') {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Landing onStart={handleStart} />
      </div>
    );
  }

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'scenario' && <ScenarioBuilder onComplete={handleScenarioComplete} />}
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'executive' && <ExecutiveSummary />}
    </Layout>
  );
}
