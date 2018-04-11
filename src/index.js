import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// YouTube API key - console.developers.google.com
const API_KEY = 'AIzaSyDYomOy8E018K4w5b5UxDQoImpGecVm5H4';

YTSearch({key: API_KEY, term: 'surfbaords'}, function(data) {
  console.log(data);
})

// Create new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));