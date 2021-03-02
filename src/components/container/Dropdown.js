import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, onOptionChange, label}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setDropdownOpen(false)
    }, {capture: true})
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

  const onOptionChange = () => {
    setSelected(option)
  }
// ^^^this prevents the same option from showing up twice, once in the selected section, and once in the dropdown. 
    return (
      <div
       key={option.value} 
       className="item"
       onClick={onOptionChange}
       >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={() => {
            setDropdownOpen(!dropdownOpen)}}
          className={`ui selection dropdown ${dropdownOpen ? 'visible active': ''}`}
              //  ^^^^^^^this reads as "if open is true, then add visible active to the overall string, otherwise if its false, put in the '' (empty string)"
        >
          <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${dropdownOpen ? 'visible transition': ''}`}>
              {renderedOptions}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;