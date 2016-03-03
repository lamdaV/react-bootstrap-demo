var React = require("react");

var ShotData = React.createClass({
    render: function() {
        var divStyle = {
          boxShadow: "0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)",
          borderRadius: "10",
          textAlign: "center",
          marginTop: "20",
          marginBottom: "20",
          background: "white",
        };

        var textStyle = {
            color: "white",
        }

        return (
            <div style = {divStyle}>
                <div className = "col-sm-4" style = {textStyle}>
                    <div className = "row">
                        <h3> {this.props.viewCount} </h3>
                    </div>

                    <div className = "row" >
                        <h4> Shot Views </h4>
                    </div>
                </div>

                <div className = "col-sm-4">
                    <div className = "row">
                        <h3> {this.props.likes} </h3>
                    </div>

                    <div className = "row" >
                        <h4> Likes </h4>
                    </div>
                </div>

                <div className = "col-sm-4">
                    <div className = "row">
                        <h3> {this.props.commentCount} </h3>
                    </div>

                    <div className = "row" >
                        <h4> Comments </h4>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShotData;
