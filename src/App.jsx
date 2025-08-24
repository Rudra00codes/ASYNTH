import React from 'react';
import './styles/global.css';
import AppShell from './components/layout/AppShell.jsx';
import TechStackPanel from './components/tech/TechStackPanel.jsx';
import ProfileCard from './components/profile/ProfileCard.jsx';
import LinksPanel from './components/links/LinksPanel.jsx';
import DailyToolStack from './components/daily/DailyToolStack.jsx';
import ToolIconRail from './components/daily/ToolIconRail.jsx';
import ProjectHighlightCard from './components/project/ProjectHighlightCard.jsx';

const App = () => (
  <AppShell>
    {/* Left Column */}
    <div className="flex flex-col gap-6 lg:gap-8 lg:sticky lg:top-6">
      <TechStackPanel />
    </div>
    {/* Middle Column */}
    <div className="flex flex-col gap-6 lg:gap-8">
      <ProfileCard />
      <div className="grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)]">
        {/* On small screens, show the tool icons as a horizontal scroll rail */}
        <div className="lg:block hidden">
          <ToolIconRail />
        </div>
        <div className="lg:hidden block">
          <ToolIconRail horizontal />
        </div>
        <DailyToolStack />
      </div>
    </div>
    {/* Right Column */}
    <div className="flex flex-col gap-6 lg:gap-8 lg:sticky lg:top-6">
      <LinksPanel />
      <ProjectHighlightCard />
    </div>
  </AppShell>
);

export default App;
