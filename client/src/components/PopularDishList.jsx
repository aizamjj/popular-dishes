import React from 'react';
import PopularDishEntry from './PopularDishEntry.jsx';

class PopularDishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 0,
            leftButton: false,
            rightButton: (this.props.popularDishes.length > 3) ? true: false,
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        const dishes = this.props.popularDishes;
        if (e.target.className === 'right') {
            if (dishes.length - 3 > this.state.currentView + 3) {
                console.log('on right click', this.state.currentView + 3);
                this.setState({ currentView: this.state.currentView + 3 });
                this.setState({leftButton: true});
            } else {
                this.setState({ rightButton: false });
                this.setState({ currentView: dishes.length - 3 });
                console.log('on right click', dishes.length - 3 );
            }
            
        } else {
            
            if (this.state.currentView - 3 > 3) {
                console.log('on left click', this.state.currentView - 3);
                this.setState({currentView: this.state.currentView - 3});
                this.setState({rightButton: true});
            } else {
                this.setState({currentView: 0})
                console.log('on left click', 0);
                this.setState({ rightButton: true });
                this.setState({ leftButton: false });
            }
        }
    }


    render() {
        return (
            <div>
                {(this.state.leftButton) ? <button onClick={this.onClickHandler} className="left"> left </button> : null }
                {this.props.popularDishes.slice(this.state.currentView, this.state.currentView + 3).map((popularDish) => (
                    <div>
                        <PopularDishEntry item={popularDish.item} photos={popularDish.photos} reviews={popularDish.reviews} />
                    </div>
                ))}
                {(this.state.rightButton) ? <button onClick={this.onClickHandler} className="right"> right </button> : null}
            </div>
        )
    }
}

export default PopularDishList;