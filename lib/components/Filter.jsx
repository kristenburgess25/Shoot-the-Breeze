import React from 'react';


class FilteredMessages extends React.Component {


  render() {

    return (
      <input type="search" placeholder="Filter"
        onChange={this.filterMessages}/>
     );
  }
}



module.exports = FilteredMessages;
