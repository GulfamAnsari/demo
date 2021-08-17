import React, { Component } from 'react';
import '../Card/Cards.css';
import ClubImg from '../../images/Club.png';
import Spade from '../../images/Spade.png';
import Diamond from '../../images/Diamond.png';
import Heart from '../../images/Heart.png';

export class Card extends Component {
    
    getCardImage = () => {
        const { card } = this.props;
        switch (card.type) {
            case 'clubs':
                return ClubImg;
            case 'spades':
                return Spade;
            case 'hearts':
                return Heart;
            case 'diamonds':
                return Diamond;
        }
    }

    showImage = () => {
        const { card } = this.props;
        var val = +card.value;
        var images = []
        if (!isNaN(val)) {
            while(val > 0) {
                images.push(<img width="20px" src={this.getCardImage()} />);
                val--;
            }
        } else if (card.value == "A"){
            images.push(<img width="30px" src={this.getCardImage()} />);
        }
        return images;
    }

    render() {
        const { card } = this.props;
        return (
            <div className="individualCard" style={ card.type === "clubs" || card.type === "spades" ? { borderColor: "red"}: { borderColor: "black" }}>
                <div className={"leftName"}>{card.value}</div>
                <div>{this.showImage()}</div>
                <div className={"rightName"}>{card.value}</div>
            </div>
        )
    }
}
