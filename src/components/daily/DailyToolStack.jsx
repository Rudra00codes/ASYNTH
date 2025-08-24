import React from 'react';
import Panel from '../layout/Panel.jsx';

const DailyToolStack = () => (
  <div className="grid gap-4 sm:gap-6">
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">DAILY<br/>Tool<br/>STACK.</h2>
    </div>
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      <Panel className="min-h-[9rem] sm:min-h-[10rem] flex items-center justify-center">NASA IMG</Panel>
      <Panel className="min-h-[9rem] sm:min-h-[10rem] flex items-center justify-center">Placeholder</Panel>
      <Panel className="min-h-[9rem] sm:min-h-[10rem] flex items-center justify-center">Music Track</Panel>
      <Panel className="min-h-[9rem] sm:min-h-[10rem] flex items-center justify-center">Quote</Panel>
    </div>
  </div>
);

export default DailyToolStack;
