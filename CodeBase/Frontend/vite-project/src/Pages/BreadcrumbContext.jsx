// BreadcrumbContext.js
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const BreadcrumbContext = createContext();

export const useBreadcrumb = () => useContext(BreadcrumbContext);

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState({ items: [], isVisible: true });

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

BreadcrumbProvider.propTypes = {
  children: PropTypes.node.isRequired
};