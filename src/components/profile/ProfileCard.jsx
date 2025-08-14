import React from 'react';
import Panel from '../layout/Panel.jsx';

const ProfileCard = () => (
  <Panel className="panel-double">
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-white/10" />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">Shawn.</h2>
        <p className="text-sm text-neutral-400">@zzzzshawn</p>
      </div>
      {/* Yin Yang icon */}
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 ring-1 ring-white/10">
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="32" cy="32" r="30" fill="#fff" />
          <path d="M32 2c16.569 0 30 13.431 30 30S48.569 62 32 62c-8.284 0-15-6.716-15-15 0-7.732 6.268-14 14-14s14-6.268 14-14C45 8.716 39.284 2 32 2z" fill="#000" />
          <circle cx="31" cy="19" r="4" fill="#000" />
          <circle cx="33" cy="45" r="4" fill="#fff" />
        </svg>
      </span>
    </div>
    <p className="mt-6 font-semibold text-lg">I build <span className="font-extrabold">Backends</span> .</p>
    <p className="mt-2 text-sm text-neutral-300">Hello, I'm Shawn! a 22 year old developer based in Goa - India.</p>
    <div className="mt-6 flex items-center justify-between text-[11px] text-neutral-400">
      <em>“How do i center<br/>a div again?”</em>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span>Available for work</span>
      </div>
    </div>
  </Panel>
);

export default ProfileCard;
