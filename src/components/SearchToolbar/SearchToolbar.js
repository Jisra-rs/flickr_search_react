import React, { Component } from 'react';
import './SearchToolbar.css';

class SearchToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (ev) => {
    this.setState({ search: ev.value });
  };

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;

    return (
      <form onSubmit={ ev => { ev.preventDefault(); handleSearch(search, 1)}}>
      <div className="searchObj">
        <input
          type="text"
          value={search}
          onChange={this.handleChange}
          placeholder="Search photos"
        />
        <input
          type="submit"
          value="Search"
        />
      </div>
      </form>
    );
  }
}

export default SearchToolbar;
