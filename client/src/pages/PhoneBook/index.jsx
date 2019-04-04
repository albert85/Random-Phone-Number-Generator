import React from 'react';

import './PhoneBook.scss';

export default class PhoneBook extends React.Component {
  renderCard(cardName, titleHeaderTitle, cardValue) {
    return (
      <div className={`card ${cardName}`}>
        <p className="text-size">{titleHeaderTitle}</p>
        <p className="text-value-size">{cardValue}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="phone-book">
        <div className="header"></div>
        {this.renderCard('total-phone-number', 'Total Generated Number', 0)}
        {this.renderCard('max-phone-number', 'Maximum Number Generated', 5000)}
        {this.renderCard('min-phone-number', 'Minimum Number Generated', 10000)}
        <div className="side-menu">
          <h1>Menu</h1>
        </div>
        <div className="table-view">
          <h1>table</h1>
        </div>
      </div>
    )
  }
}
