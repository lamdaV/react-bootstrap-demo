var React = require("react");

var StatsPanel = React.createClass({
    render: function() {
        var divStyle = {
            height: "140",
            width: "180",
            boxShadow: "2px 8px 12px #aaaaaa",
        }
        var headerStyle = {
            background: "green",
            height: "90",
            width: "180",
        };

        var footerStyle = {
            height: "50",
            width: "180",
        }

        var textStyle = {
            fontFamily: "Calibri",
            fontSize: "18",
            marginTop: "10",
            color: "white",
        };

        var statStyle = {
            fontFamily: "Calibri",
            fontSize: "32",
            color: "white",
        };

        if (this.props.headerBackground) {
            headerStyle.background = this.props.headerBackground;
        };

        return (
            <div className = "panel panel-default" style = {divStyle}>
                <div className = "panel-header" style = {headerStyle}>
                    <div className = "col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-1">
                        <div className = "row" style = {textStyle}>{this.props.text}</div>
                        <div className = "row" style = {statStyle}>{this.props.stats}</div>
                    </div>
                </div>

                <div className = "panel-footer" style = {footerStyle}></div>
            </div>
        );
    }
});

module.exports = StatsPanel;
