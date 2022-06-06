import React from 'react';

//The header of the Page
export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom mt-2">
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Life Satisfaction In UK</span>
        </div>
      </header>
    </div>
  );
}