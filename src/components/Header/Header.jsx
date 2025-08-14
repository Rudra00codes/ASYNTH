import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between p-4">
      <div className="w-32 h-8 rounded bg-white/10" aria-hidden="true" />
      <Navigation open={open} setOpen={setOpen} />
      <button aria-label="Menu" onClick={() => setOpen(o=>!o)} className="md:hidden text-asynth-dark">
        <span className="text-xl">☰</span>
      </button>
    </header>
  );
};

export default Header;
