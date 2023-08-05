import React, { MouseEvent } from 'react';

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ href, children }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = href;
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <a href={href} onClick={handleClick}>{children}</a>;
};

export default AnchorLink;
