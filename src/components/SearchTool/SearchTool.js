import React, { Component } from 'react';
import './searchTool.css';

class SearchTool extends Component {
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
      <>
        <div className="_divSearch">
          <div className="_searchObj">
            <input
              type="text"
              id="_text_label"
              value={search}
              onChange={this.handleChange}
              placeholder="Search photos"
            />
            <input
              type="button"
              id="_search"
              onClick={() => handleSearch(search, 1)}
              value="Search"
            />
          </div>
        </div>
      </>
    );
  }
}

export default SearchTool;
