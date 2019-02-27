import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './../ui/TitleBar';
import AddPlayer from './../ui/AddPlayer';
import PlayerList from './../ui/PlayerList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title="Score Keep" subTitle="Created by Patrick Lassche"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    players: PropTypes.array.isRequired
}