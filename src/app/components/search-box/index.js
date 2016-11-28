import React, { PropTypes } from 'react';

class SearchBox extends React.Component{
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    text: PropTypes.string,
    onSearchByText: PropTypes.func.isRequired,
    onSearchByGeoLocation: PropTypes.func.isRequired,
  };

  render() {
    const {disabled, text, onSearchByText, onSearchByGeoLocation} = this.props;

    return (
      <div className="row">
        <input
          type="text"
          placeholder="ex: London, GB"
          className="form-control"
          ref="query"
          value={text}
          disabled={disabled}/>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => onSearchByText(this.refs.query.value)}
          disabled={disabled}>
          Search
        </button>
        <span> or </span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSearchByGeoLocation}
          disabled={disabled}>
          Locate me!
        </button>
      </div>
    );
  }
};

export default SearchBox;