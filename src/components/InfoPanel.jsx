var React = require("react");

var InfoPanel = React.createClass({
    render: function() {
        var divStyle = {
            height: 200,
            width: 180,
            background: "#939393",
            boxShadow: "2px 8px 12px #aaaaaa",
        };

        var numberStyle = {
            marginTop: 40,
            fontFamily: "Calibri",
            fontSize: "22",
            fontStyle: "bold",
            color: "#3f3f3f",
        };

        var textStyle = {
            fontFamily: "Calibri",
            fontSize: "18",
            color: "white",
            marginTop: "20",
        };

        return (
            <div className = "panel panel-default" style = {divStyle}>
                <div className = "col-xs-12 col-xs-offset-1 col-sm-12 col-sm-offset-1">
                    <div className = "row" style = {numberStyle}>{this.props.number}</div>
                    <div className = "row" style = {textStyle}>{this.props.text}</div>
                </div>
            </div>
        );
    }
});

module.exports = InfoPanel;
