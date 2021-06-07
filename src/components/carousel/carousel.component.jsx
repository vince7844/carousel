import React from 'react';

import Card from '../card/card.component';
import MainCard from '../main-card/main-card.component';

import './carousel.styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, isMainCard: false }, 
        { id: 2, isMainCard: false }, 
        { id: 3, isMainCard: false }, 
        { id: 4, isMainCard: true }, 
        { id: 5, isMainCard: false }, 
        { id: 6, isMainCard: false }, 
        { id: 7, isMainCard: false }
      ]
    }
  }

  handleClickLeft = () => {
    const { cards } = this.state;
    const mainCardIndex = cards.findIndex(card => card.isMainCard === true);
    const updateCurrentMainCard = { ...cards[mainCardIndex], isMainCard: false }
    const newMainCard = { ...cards[mainCardIndex - 1], isMainCard: true }
    const cardsUpdated = [
      ...cards.slice(0, mainCardIndex - 1),
      newMainCard,
      updateCurrentMainCard,
      ...cards.slice(mainCardIndex + 1, cards.length)
    ]
    console.log("cardsUpdated = ", cardsUpdated)
    if(cardsUpdated.length > cards.length) {
      return cards;
    } else {
      this.setState({ cards: cardsUpdated })
      console.log("mainCardIndex = ", mainCardIndex)
    }
  }
  
  handleClickRight = () => {
    const { cards } = this.state;
    const mainCardIndex = cards.findIndex(card => card.isMainCard === true);
    const updateCurrentMainCard = { ...cards[mainCardIndex], isMainCard: false }
    const newMainCard = { ...cards[mainCardIndex + 1], isMainCard: true }
    console.log("updateCurrentMainCard = ", updateCurrentMainCard)
    console.log("newMainCard = ", newMainCard)
    const cardsUpdated = [
      ...cards.slice(0, mainCardIndex),
      updateCurrentMainCard,
      newMainCard,
      ...cards.slice(mainCardIndex + 2, cards.length)
    ]
    console.log("cardsUpdated = ", cardsUpdated)
    if(cardsUpdated.length > cards.length) {
      return cards;
    } else {
      this.setState({ cards: cardsUpdated })
      console.log("mainCardIndex = ", mainCardIndex)
    }
  }

  render() {
    return (
      <>
       <div className='carousel'>
        { 
          this.state.cards.map(card =>
            card.isMainCard
              ? <MainCard key={card.id} />
              : <Card key={card.id} />
          ) 
        }
       </div>
       <div className='buttons'>
        <div className='btn-left' onClick={this.handleClickLeft}>&#10094;</div>
        <div className='btn-right' onClick={this.handleClickRight}>&#10095;</div>
       </div>
      </>
    )
  }
}

export default Carousel;