var React = require("react");

var ShotPanel = React.createClass({
    getInitialState: function() {
        return {viewCount: parseInt(this.props.shotViews)};
    },

    handleClick: function(e) {
        var currentView = this.state.viewCount;
        this.setState({viewCount: currentView + 1});
    },

    render: function() {
        var headerStyle = {
            height: 200,
        };

        var footerStyle = {
            background: "#3f3f3f",
        };

        var numberStyle = {
            fontFamily: "Calibri",
            fontSize: "22",
            fontStyle: "bold",
            color: "white",
        };

        var textStyle = {
            fontFamily: "Calibri",
            fontSize: "18",
            color: "#939393",
        };

        if (this.props.headerBackground) {
            headerStyle.background = this.props.headerBackground;
        };

        return (
            <div onClick = {this.handleClick}>
                <div className = "panel panel-default">
                    <div className = "panel-header" style = {headerStyle}>
                    </div>

                    <div className = "panel-footer" style = {footerStyle}>
                        <div className = "row">
                            <div className = "col-xs-4 col-sm-4 text-center">
                                <div className = "row" style = {numberStyle}>{this.state.viewCount}</div>
                                <div className = "row" style = {textStyle}>Shot Views</div>
                            </div>

                            <div className = "col-xs-4 col-sm-4 text-center">
                                <div className = "row" style = {numberStyle}>{this.props.likeCount}</div>
                                <div className = "row" style = {textStyle}>Likes</div>
                            </div>

                            <div className = "col-xs-4 col-sm-4 text-center">
                                <div className = "row" style = {numberStyle}>{this.props.commentCount}</div>
                                <div className = "row" style = {textStyle}>Comments</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShotPanel;
