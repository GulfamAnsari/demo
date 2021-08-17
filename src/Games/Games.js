import React, { Component } from 'react'
import { Card } from './Card/Card';
import './Games.css';;

export class Games extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                ...this.getCards('clubs'),
                ...this.getCards('diamonds'),
                ...this.getCards('hearts'),
                ...this.getCards('spades'),
            ],
            colors: {
                clubs: "black",
                spades: "black",
                diamonds: "white",
                hearts: "white"
            },
            removeCards: []
        }
    }

    componentDidMount = () => {
        console.log(this.state.cards)
    }

    getCards = (type) => {
        let card = [];
        for (let i = 1; i <= 13; i++) {
            switch (i) {
                case 1:
                    card.push({ type, value: "A"});
                    break;
                case 11:
                    card.push({ type, value: "J"});
                    break;
                case 12:
                    card.push({ type, value: "Q"});
                    break;
                case 13:
                    card.push({ type, value: "K"});
                    break;
                default:
                    card.push({ type, value: i });
                    break;
            }
        }
        return card;
    }


    displayallCards = (cards) => {
        return cards.map(card => {
            return <li><Card card={card} /></li>
        });
    }

    removeCard = () => {
        const { cards, cardLeft, removeCards } = this.state;
        if (cards.length) {
            const cardLeft = [...cards];
            for (var i = 0; i < 5; i++) {
                let len = cardLeft.length;
                let ran = Math.floor((Math.random() * len) + 1);
                console.log(ran)
                const popelemt = cardLeft.splice(ran - 1, 1);
                removeCards.push(...popelemt);
            }
            console.log(cardLeft, removeCards)
            this.setState({ removeCards: removeCards, cards: cardLeft });
        } else {
            alert("empty dack");
        }
       
    }

    render() {
        const { cards, removeCards } = this.state;
        return (
            <div>
                <h2>A Dack Of Cards</h2>
                <button onClick={ () => {this.removeCard()}}>Click Here To Remove Cards</button>
                <div className="cardContainer">
                    <ul className="cardList">
                        {console.log(removeCards)}
                        {this.displayallCards(removeCards)}
                    </ul>
                </div>
            </div>
        )
    }
}
