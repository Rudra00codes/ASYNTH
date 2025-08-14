import React from 'react';

/* Panel now supports a 'double-ring' effect by leveraging a ::after inner outline.
   To enable, add the class 'panel-double'. */
const Panel = ({ className = '', children, as:Tag='div' }) => (
  <Tag className={`panel-base relative rounded-xl border border-white/15 bg-neutral-900/70 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_24px_-8px_rgba(0,0,0,0.6)] p-6 ${className}`}>
    {children}
  </Tag>
);

export default Panel;

// Tailwind can't style pseudo for arbitrary classes inline easily, so we add global styles via injected style tag once.
if (typeof document !== 'undefined' && !document.getElementById('panel-double-style')) {
  const style = document.createElement('style');
  style.id = 'panel-double-style';
  style.textContent = `
    .panel-base.panel-double { position: relative; }
    .panel-base.panel-double:after {
      content: '';
      pointer-events: none;
      position: absolute; inset: 3px;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 0.75rem; /* match rounded-xl minus offset */
    }
  `;
  document.head.appendChild(style);
}
