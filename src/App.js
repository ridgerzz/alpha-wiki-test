function App() {
  return (
    <div className="App">
      <header>
        <h1>Alpha Wiki Beta</h1>
        <form className="search-box">
          <input type="search" placeholder="What are you looking for?" />
        </form>
        <p>Search Results: 0</p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Title Goes Here</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
