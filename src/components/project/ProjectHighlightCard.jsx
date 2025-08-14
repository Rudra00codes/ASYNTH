import React from 'react';
import Panel from '../layout/Panel.jsx';

const ProjectHighlightCard = () => (
  <Panel className="panel-double relative overflow-hidden bg-purple-300 text-black font-extrabold h-72 flex flex-col justify-start p-6">
    <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-white/20" />
    <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-white/10" />
    <div className="relative z-10 space-y-2">
      <div className="text-5xl leading-none">PROJECT<br/>SSS</div>
    </div>
    <div className="absolute right-4 bottom-4 rotate-90 font-black tracking-wider">工芸</div>
  </Panel>
);

export default ProjectHighlightCard;
