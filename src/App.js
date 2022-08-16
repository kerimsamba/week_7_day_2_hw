import './App.css';
import FilmReleaseBox from './container/FilmReleaseBox';

function App() {
  return (
    <div className="App">

      <FilmReleaseBox/>
      <p>
      <a style={{textDecoration: 'none'}} href="https://www.imdb.com/calendar/?region=gb"
      >View more upcoming releases {">>"}</a>
      </p>


    </div>
  );
}

export default App;

