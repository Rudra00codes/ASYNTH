import React from 'react';

const AppShell = ({ children }) => (
  <div className="min-h-screen bg-black text-white">
    <div className="mx-auto max-w-[1320px] px-6 pt-8 grid gap-8 grid-cols-[300px_minmax(0,1fr)_300px]">
      {children}
    </div>
  </div>
);

export default AppShell;
