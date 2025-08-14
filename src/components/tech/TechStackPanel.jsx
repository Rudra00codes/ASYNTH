import React from 'react';
import Panel from '../layout/Panel.jsx';

const groups = [
  { title: 'Frontend', tags: ['React','Nextjs','Shadcn','SCSS','Tailwindcss','Framer-Motion','Recoil','Tanstack Query'] },
  { title: 'Backend', tags: ['Nodejs','Honojs','Expressjs','NPM'] },
  { title: 'Db & Services', tags: ['Cloudflare Workers','Docker','Appwrite','Supabase','Prisma ORM','Postman','Postgres','MongoDB'] }
];

const Tag = ({ children }) => (
  <span className="inline-block rounded-md bg-white/5 border-2 border-double border-white/15 px-3 py-1 text-[11px] tracking-wide leading-none">
    {children}
  </span>
);

const TechStackPanel = () => {
  return (
  <Panel className="panel-double">
      <header className="mb-6">
        <div className="text-5xl font-extrabold leading-none tracking-tight">{`{ }`}</div>
        <h2 className="mt-2 text-5xl font-extrabold leading-tight">TECH<br/>STACK</h2>
        <div className="h-1 bg-white w-40 mt-4 rounded-full" />
      </header>
      <div className="space-y-6 text-sm">
        {groups.map(g => (
          <div key={g.title}>
            <h3 className="font-semibold mb-2">{g.title}:</h3>
            <div className="flex flex-wrap gap-2">
              {g.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default TechStackPanel;
