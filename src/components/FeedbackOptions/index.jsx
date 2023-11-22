import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(elem => (
      <button key={elem} onClick={() => onLeaveFeedback(elem)}>
        {elem}
      </button>
    ))}
  </div>
);
