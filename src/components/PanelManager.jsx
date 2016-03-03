var React = require("react");
var ShotPanel = require("./ShotPanel.jsx");
var InfoPanel = require("./InfoPanel.jsx");
var WeatherPanel = require("./WeatherPanel.jsx");
var StatsPanel = require("./StatsPanel.jsx");

var PanelManager = React.createClass({
    render: function() {
        return (
            <div>
                <div className = "row">
                    <div className = "col-sm-3">
                        <InfoPanel number = "20" text = "New followers added this month"/>
                    </div>

                    <div className = "col-sm-3">
                        <InfoPanel number = "$ 1250" text = "Average Monthly Income" />
                    </div>

                    <div className = "col-sm-3">
                        <InfoPanel number = "$ 13865" text = "Yearly Income Goal" />
                    </div>

                    <div className = "col-sm-3">
                        <WeatherPanel temperature = "15" text = "Somewhere" />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-sm-9">
                        <ShotPanel shotViews = "15080" likeCount = "12000" commentCount = "5100" headerBackground = "cyan"/>
                    </div>

                    <div className = "col-sm-3">
                        <div className = "row">
                            <StatsPanel text = "New Visitors" stats = "1.5k" headerBackground = "red" />
                        </div>

                        <div className = "row">
                            <StatsPanel text = "Bounce Rate" stats = "50%" headerBackground = "purple" />
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-sm-9">
                        <ShotPanel shotViews = "15080" likeCount = "12000" commentCount = "5100" headerBackground = "purple"/>
                    </div>

                    <div className = "col-sm-3">
                        <div className = "row">
                            <StatsPanel text = "Searches" stats = "28%" headerBackground = "violet" />
                        </div>

                        <div className = "row">
                            <StatsPanel text = "Traffic" stats = "140.5 kb" headerBackground = "brown" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PanelManager;
