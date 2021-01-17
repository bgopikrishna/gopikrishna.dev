import React from 'react';
import { toKebabCase } from '../../utils/misc';
import './ToC.css';

const ToC = ({ headings }) => {
  return (
    <aside className="table-contents">
      <h3>Table of contents</h3>
      <ul>
        {headings.map(item => (
          <li key={item.value}>
            {' '}
            <a href={`#${toKebabCase(item.value)}`}>{item.value}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ToC;
