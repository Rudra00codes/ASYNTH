import React from 'react';

const AppShell = ({ children }) => (
  <div className="min-h-screen bg-black text-white">
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6 py-6 grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)_300px]">
      {children}
    </div>
  </div>
);

export default AppShell;
