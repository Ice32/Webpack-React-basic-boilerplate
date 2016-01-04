define(["react"], function(React){
    let App = React.createClass({
        render(){
            return(<div>{this.props.foo}</div>)
        }
    });
    return App;
});