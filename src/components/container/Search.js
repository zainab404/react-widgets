import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  console.log(results)

  useEffect(() => {
    const searchWiki = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: "json",
          srsearch: keyword
        }
      });
      setResults(data.query.search);
    };
    const timeoutId = setTimeout(() => {
      if (keyword) {
        searchWiki();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId)
    };
    }, [keyword]);

    const renderedResults = results.map((result) => {
      return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a 
            className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
            {/* ^^^this is opening us up to risk of XSS attacks */}
          </div>
        </div>
      )
    })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Here:</label>
            <input 
              value={keyword} 
              className="input"
              onChange = {event => setKeyword(event.target.value)}
            />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
};

export default Search;