import React, { Component } from 'react';
import './SearchToolbar.css';

class SearchToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;

    return (
      <div className="searchObj">
        <input
          type="text"
          value={search}
          onChange={this.handleChange}
          placeholder="Search photos"
        />
        <input
          type="button"
          onClick={() => handleSearch(search, 1)}
          value="Search"
        />
      </div>
    );
  }
}

export default SearchToolbar;
