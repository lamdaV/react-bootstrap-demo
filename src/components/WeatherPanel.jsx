var React = require("react");

var WeatherPanel = React.createClass({
    getInitialState: function() {
        var initialTemperature = parseInt(this.props.temperature);
        var bgColor;

        if (initialTemperature <= 30) {
            bgColor = "blue";
        } else if (initialTemperature > 30 && initialTemperature < 60) {
            bgColor = "orange";
        } else {
            bgColor = "red";
        }

        return {bgColor: bgColor};
    },

    render: function() {
        var divStyle = {
            height: 200,
            width: 180,
            background: this.state.bgColor,
            boxShadow: "2px 8px 12px #aaaaaa",
        };

        var temperatureStyle = {
            marginTop: 40,
            fontFamily: "Calibri",
            fontSize: "48",
            fontStyle: "bold",
            color: "white",
        };

        var locationStyle = {
            fontFamily: "Calibri",
            fontSize: "24",
            fontStyle: "bold",
            color: "white",
        };

        return (
            <div className = "panel panel-default" style = {divStyle}>
                <div className = "row">
                    <div className = "col-xs-12 col-xs-offset-1 col-sm-4 col-sm-offset-4" style = {temperatureStyle}>{this.props.temperature} </div>
                </div>

                <div className = "row">
                    <div className = "col-xs-12 col-xs-offset-1 col-sm-4 col-sm-offset-2" style = {locationStyle}>{this.props.text}</div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherPanel;
