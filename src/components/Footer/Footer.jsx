import React from 'react';

const socials = [
  { icon: 'youtube', href: 'http://www.youtube.com/@artistictwins' },
  { icon: 'instagram', href: 'http://www.instagram.com/oblivion_me_12/' },
  { icon: 'twitter', href: '#' },
  { icon: 'twitch', href: '#' },
  { icon: 'facebook', href: '#' }
];

const Footer = () => {
  return (
    <footer className="mt-32 bg-asynth-brown text-white text-center py-10" id="contact">
      <h3 className="font-space text-3xl mb-4">WEBdev</h3>
      <p className="max-w-2xl mx-auto opacity-80 mb-6 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum hic perspiciatis dolores Unde aut maxime.</p>
      <div className="flex items-center justify-center space-x-4 mb-4">
        {socials.map(s => (
          <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" className="text-xl hover:scale-125 transition-transform">
            <i className={`fa-brands fa-${s.icon}`}></i>
          </a>
        ))}
      </div>
      <p className="text-sm opacity-75">&copy;2025 WEBdev. Designed by RUDRA PRATAP SINGH</p>
    </footer>
  );
};

export default Footer;
