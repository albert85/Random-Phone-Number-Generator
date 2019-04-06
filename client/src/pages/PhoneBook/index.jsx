import React from 'react';
import { connect } from 'react-redux';

import './PhoneBook.scss';

import { generatePhoneNumbers, getAllPhoneNumbers } from '../../action';

export class PhoneBook extends React.Component {

  state = {
    phoneList: this.props.phoneBook.data,
    amountToGenerate: 0,
    sort: 'Ascending',
    error: false
  }

  generateNumber = () => {
    if(this.state.amountToGenerate < 1 ){
      return this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
    }

    const sort = (this.state.sort === 'Ascending' ? 'ascr': 'descr');
    this.props.generatePhoneNumbers(this.state.amountToGenerate, sort)
    .then((res) => {
      this.setState({
        phoneList: res.data
      })
    });
  }

  getAllNumbers = () => {
    const sort = (this.state.sort === 'Ascending' ? 'ascr': 'descr');
    this.props.getAllPhoneNumbers(sort)
    .then((res) => {
      this.setState({
        phoneList: res.data
      })
    });
  }

  sortAscending = (arrayToSort) => {
    const sortedAscr = arrayToSort.sort((a,b) => a-b);
    this.setState({
      phoneList: sortedAscr
    })
  }


  sortDescending = (arrayToSort) => {
    const sortedDescr = arrayToSort.sort((a,b) => b-a);
    this.setState({
      phoneList: sortedDescr
    })
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    if(name=="sort" && this.state.phoneList.length > 0){
      value === 'Descending' ? this.sortDescending(this.state.phoneList) : this.sortAscending(this.state.phoneList)
    }

    this.setState({
      [name]: value,
    })
  }

  /**
   * This method render side bar
   * 
   * @returns{JSX}
   */
  renderSideMenuBar() {
    return (
      <div className="side-menu">
        <div className="sort-container">
          <p>Sort</p>
          <select className="sort-field" name="sort" value={this.state.sort} onChange={this.handleOnChange}>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
        <div className="generate-container">
          <p>Amount to generate</p>
          <input
            name="amountToGenerate"
            type="number"
            className="adjust-size"
            min="0"
            onChange={this.handleOnChange}
          />
          {this.state.error && (<span>Amount to generate must be greater than zero</span>)}
        </div>

        <div>
          <button
            className="adjust-size--generate"
            onClick={this.generateNumber}
          >
            Generate Telephone Number
        </button>
        </div>
        <div>
          <button
            className="get-all-btn adjust-size--get-all"
            onClick={this.getAllNumbers}
          >
            Get All Telephone Numbers
        </button>
        </div>
      </div>
    )
  }

  /**
   * This method renders card on the page
   * @param {String} cardName 
   * @param {String} titleHeaderTitle 
   * @param {String} cardValue 
   */
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
        <div className="header">Random Telephone Number Generator</div>
        {this.renderCard('total-phone-number', 'Total Generated Number', this.props.phoneBook.data.length)}
        {this.renderCard('max-phone-number', 'Maximum Number Generated', this.props.phoneBook.max)}
        {this.renderCard('min-phone-number', 'Minimum Number Generated', this.props.phoneBook.min)}
        {this.renderSideMenuBar()}
        <div className="table-view">
          <ul className="number-list">
            {this.state.phoneList.map((number, index) => {
              return (<li key={index}>{number}</li>)
            })}

          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  generatePhoneNumbers: (limit, sort) => dispatch(generatePhoneNumbers(limit, sort)),
  getAllPhoneNumbers: (sort) => dispatch(getAllPhoneNumbers(sort)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);


