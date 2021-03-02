import React, {useState} from 'react';
import Accordion from './container/Accordion';
import Search from './container/Search';
import Dropdown from './container/Dropdown';
import Translate from './container/Translate';
import Route from './presentational/Route';
import Header from './presentational/Header';

const items = [
  {title: 'What is React?', content: 'React is a front end javascript framework'}, // 0
  {title: "Why use React?", content: "React is a favorite JS library amongst engineers"}, // 1
  {title: "How do you use React?", content: "You use React by creating components"}
];

const options = [
  {
    label: "Crimson",
    value: 'red'
  },

  {
    label: "Emerald",
    value: 'green'
  },

  {
    label: "Saphire",
    value: 'blue'
  }
];

// *******************************************
const App = ({selected, setSelected}) => {
  return (
    <div>
      <Header/>

      <Route path="/">
        <Accordion items={items}/>
      </Route>

      <Route path="/search">
        <Search/>
      </Route>

      <Route path="/dropdown">
        <Dropdown 
          label="Select Color"
          options={options}
          selected={selected}
          onOptionChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
   
  )
}

export default App;