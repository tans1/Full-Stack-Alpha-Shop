import Dropdown from 'react-bootstrap/Dropdown';

function DropDownButton({changeSize}) {

  return (
    <Dropdown className='dropdownContainer'>
      <Dropdown.Toggle  id="dropdown-basic">
        Choose size
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => changeSize("large")}>large</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => changeSize("medium")}>medium</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={() => changeSize("small")}>small</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButton;