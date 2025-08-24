import React from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'More', href: '#more' },
  { name: 'Contact', href: '#contact' }
];

const Navigation = ({ open, setOpen }) => {
  return (
    <nav>
      <ul className={`hidden md:flex space-x-8 text-white/90`}> 
        {navItems.map(item => (
          <li key={item.name} className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all hover:after:w-3/4">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      {open && (
        <ul className="md:hidden absolute top-16 right-4 bg-neutral-900/80 text-white backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col space-y-4">
          {navItems.map(item => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
