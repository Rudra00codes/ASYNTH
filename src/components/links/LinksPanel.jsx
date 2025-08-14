import React from 'react';
import Panel from '../layout/Panel.jsx';

const links = [
  { id:'github', label:'GitHub' },
  { id:'x', label:'X' },
  { id:'gmail', label:'Gmail' },
  { id:'discord', label:'Discord' },
  { id:'linkedin', label:'LinkedIn' }
];

const LinksPanel = () => (
  <div className="grid grid-cols-2 gap-3 w-[180px]">
    <h2 className="col-span-2 text-4xl font-extrabold leading-none">LIN<br/>KS.</h2>
    {links.map(l => (
      <Panel key={l.id} className="panel-double p-4 flex items-center justify-center h-16">
        <span className="text-sm">{l.label}</span>
      </Panel>
    ))}
  </div>
);

export default LinksPanel;
