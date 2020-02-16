import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const ControlPanel = ({submitClicked, clearClicked, word}) => {
  return (
    <div className="current-word">
      <div className="game-buttons">
        <button onClick={submitClicked} className="submit-word"><FontAwesomeIcon icon={faCheck}/></button>
        <p>
          {word}
        </p>
        <button onClick={clearClicked} className="clear-word"><FontAwesomeIcon icon={faTrash}/></button>
      </div>
    </div>
  );
};

export default ControlPanel;
