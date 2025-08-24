import React from 'react';
import Panel from '../layout/Panel.jsx';
import ghDark from '@/assets/images/links/github_Dark.svg';
import ghLight from '@/assets/images/links/github_light.svg';
import xDark from '@/assets/images/links/x_Dark.svg';
import xLight from '@/assets/images/links/x_light.svg';
import gmail from '@/assets/images/links/gmail.svg';
import discordDark from '@/assets/images/links/discord_Dark.svg';
import discordLight from '@/assets/images/links/discord_light.svg';
import liDark from '@/assets/images/links/linkedin_Dark.svg';
import liLight from '@/assets/images/links/linkedin_light.svg';

// Tile + icon sizing
const TILE_SIZE = 'w-20 h-20 sm:w-20 sm:h-20';
const OUTER_RADIUS = 'rounded-3xl';
const INNER_RADIUS = 'rounded-3xl';
const RING_INSET = 'inset-1'; // space between outer edge and inner ring/content

function BrandPicture({ dark, light, alt, className = '' }) {
  return (
    <picture className="pointer-events-none select-none">
      {light && <source srcSet={light} media="(prefers-color-scheme: light)" />}
      <img src={dark || light} alt={alt} className={`w-full h-full object-contain block ${className}`} />
    </picture>
  );
}

function Tile({ children, href, ariaLabel, unstyled = false, className = '' }) {
  if (unstyled) {
    return (
      <div className={`relative p-0 flex items-center justify-center ${className || TILE_SIZE}`}>
        {children}
      </div>
    );
  }

  return (
    <Panel className={`relative p-0 ${TILE_SIZE} overflow-hidden flex items-center justify-center ${OUTER_RADIUS} bg-white/5 border border-white/10 transition-colors hover:bg-white/8 hover:border-white/20 ${className}`}>
      {/* inner ring */}
      <span className={`pointer-events-none absolute ${RING_INSET} ${INNER_RADIUS} ring-1 ring-white/10`} />
      {/* content box matches ring inset so the icon can fill it */}
      <div className={`absolute ${RING_INSET} ${INNER_RADIUS} overflow-hidden flex items-center justify-center`}>
        {children}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={`absolute inset-0 ${OUTER_RADIUS} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25 active:scale-[0.995] transition-transform`}
        />
      ) : null}
    </Panel>
  );
}

function TitleTile() {
  return (
    // Give the title the same footprint as a tile so columns line up
    <Tile unstyled className={`${TILE_SIZE} shrink-0`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold leading-[0.9] tracking-tight text-white select-none pointer-events-none text-left">
        <span className="block">LIN</span>
        <span className="block">KS.</span>
      </h2>
    </Tile>
  );
}

export default function LinksPanel() {
  const items = {
    github: { id: 'github', href: 'https://github.com/Rudra00codes', dark: ghDark, light: ghLight, alt: 'GitHub' },
    x: { id: 'x', href: 'https://x.com/', dark: xDark, light: xLight, alt: 'X' },
    gmail: { id: 'gmail', href: 'mailto:your@email.com', dark: gmail, light: gmail, alt: 'Gmail' },
    discord: { id: 'discord', href: 'https://discord.com/', dark: discordDark, light: discordLight, alt: 'Discord' },
    linkedin: { id: 'linkedin', href: 'https://www.linkedin.com/', dark: liDark, light: liLight, alt: 'LinkedIn' },
  };

  return (
    <div className="relative p-0.5 flex flex-col gap-1 mr-auto bg-transparent">
      {/* Row 1: Title + 2 tiles. Add extra right space after the title to push the two tiles right */}
      <ul className="flex w-max justify-start gap-0.5 items-center">
        <li key="title" className="mr-0.5 sm:mr-0">
          <TitleTile />
        </li>
        <li key={items.github.id}>
          <Tile href={items.github.href} ariaLabel={items.github.alt}>
            <BrandPicture dark={items.github.dark} light={items.github.light} alt={items.github.alt} />
          </Tile>
        </li>
        <li key={items.x.id}>
          <Tile href={items.x.href} ariaLabel={items.x.alt}>
            <BrandPicture dark={items.x.dark} light={items.x.light} alt={items.x.alt} />
          </Tile>
        </li>
      </ul>

      {/* Row 2: 3 tiles */}
      <ul className="flex w-max justify-start gap-0.5 items-center">
        <li key={items.gmail.id}>
          <Tile href={items.gmail.href} ariaLabel={items.gmail.alt}>
            <BrandPicture dark={items.gmail.dark} light={items.gmail.light} alt={items.gmail.alt} />
          </Tile>
        </li>
        <li key={items.discord.id}>
          <Tile href={items.discord.href} ariaLabel={items.discord.alt}>
            <BrandPicture dark={items.discord.dark} light={items.discord.light} alt={items.discord.alt} />
          </Tile>
        </li>
        <li key={items.linkedin.id}>
          <Tile href={items.linkedin.href} ariaLabel={items.linkedin.alt}>
            <BrandPicture dark={items.linkedin.dark} light={items.linkedin.light} alt={items.linkedin.alt} />
          </Tile>
        </li>
      </ul>
    </div>
  );
}
