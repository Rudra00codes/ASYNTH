import React from 'react';
import Panel from '../layout/Panel.jsx';

const tools = ['VS','Vite','Ray','Figma','Slack','Chat'];

const ToolIconRail = () => (
  <Panel className="panel-double flex flex-col items-center gap-6 py-8 w-28">
    {tools.map(t => (
      <div key={t} className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-xs text-black font-medium">{t}</div>
    ))}
  </Panel>
);

export default ToolIconRail;
