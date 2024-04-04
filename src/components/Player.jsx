import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setisEditing] = useState(false);
 
    function handleChange(event) {
        console.log(event);
        setplayerName(event.target.value);
    }

    function handleEditClick() {
        setisEditing((editing) => !editing); // => true
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    let editablePlayerName = <span className="palyer-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        btnCaption = 'Save';
    }

    return (
        <li className={isActive? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );
}