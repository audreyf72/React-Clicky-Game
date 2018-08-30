import React, { Component } from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";

class MainGameContainer extends Component {
	state = {
		images,
		message: "Click one of the cards to begin!",
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "That one got away!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Caught One!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
		<div class="pageContainer">
        <div class="gameScores text-center">
						<p>You Caught: {this.state.score}</p>
					</div>
			    <div class="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div class="TopScores text-center">
						<p>Top Score: {this.state.topScore}</p>
					</div>
      </div>
      
      <div class="container">
					
        <div class="row">
        {this.state.images.map(image => (
          <MemoryCard
            key={image.id}
            id={image.id}
            name={image.name}
            clicked={image.clicked}
            image={image.image}
            handleClick={this.handleClick}
            />
        ))}
        </div>
        
      </div>
			</div>
		);
	}
};

export default MainGameContainer;