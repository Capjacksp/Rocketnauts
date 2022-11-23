import React, {useState} from "react";
import Switch from "react-switch";
import './Togglebutton.css';
export default function Togglebutton({label}){
        const [checked, setChecked] = useState(false);
        const handleChange = nextChecked => {
          setChecked(nextChecked);
        };
      
        return (
          <div className="togglebut">
            <div className="toggle-label"> <h2>{label}</h2></div>
            <div className="toggle-button">
            <label htmlFor="material-switch">
              <Switch
              uncheckedIcon={false}
              onColor="#EC6257"
            onHandleColor="#EC6257"
              checkedIcon={false}
                onChange={handleChange}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            handleDiameter={30}
                checked={checked}
                className="react-switch"
                id="material-switch"
              />
            </label>
            </div>
          </div>
        );
      };
      