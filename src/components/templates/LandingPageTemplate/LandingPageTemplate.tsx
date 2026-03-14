import React from 'react';

interface LandingPageTemplateProps {
  navbar: React.ReactNode;
  sections: React.ReactNode[];
  footer: React.ReactNode;
}

export const LandingPageTemplate = ({ navbar, sections, footer }: LandingPageTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-1">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {section}
          </React.Fragment>
        ))}
      </main>
      {footer}
    </div>
  );
};
