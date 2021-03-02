import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languageOptions = [
  {
    label: "Afrikaans",
    value: "af"
  },

  {
    label: "Arabic", 
    value: "ar"
  },

  {
    label: "Hindi",
    value: "hi"
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select Language"
        options={languageOptions}
        selected={language}
        onOptionChange={setLanguage}
      />
      <hr/>
      <h3 className="ui header">Output:</h3>
      <Convert text={text} language={language}/>
    </div>
  )
};

export default Translate;