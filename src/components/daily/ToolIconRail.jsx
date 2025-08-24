import React from 'react';
import Panel from '../layout/Panel.jsx';

const tools = ['VS','Vite','Ray','Figma','Slack','Chat'];

const ToolIconRail = ({ horizontal = false }) => {
  if (horizontal) {
    return (
      <Panel className="panel-double p-4">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar snap-x">
          {tools.map(t => (
            <div key={t} className="shrink-0 snap-start w-14 h-14 rounded-xl bg-white flex items-center justify-center text-xs text-black font-medium">{t}</div>
          ))}
        </div>
      </Panel>
    );
  }
  return (
    <Panel className="panel-double flex flex-col items-center gap-6 py-6 w-28">
      {tools.map(t => (
        <div key={t} className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-xs text-black font-medium">{t}</div>
      ))}
    </Panel>
  );
};

export default ToolIconRail;
