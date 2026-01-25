import React from 'react';
import './Section.css';
import { FaArrowRight } from 'react-icons/fa'; // Opcional: ícone para o link

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="section-container">
      <div className={`section-header align-${titleAlign}`}>
        <h2 className="section-title">{title}</h2>
        
        {link && (
          <a href={link.href} className="section-link">
            {link.text} <FaArrowRight className="link-icon"/>
          </a>
        )}
      </div>
      
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;