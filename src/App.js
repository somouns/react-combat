import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun } from "./index.redux";

// const mapStatetoProps = (state) =>{
//     return {num: state}
// };
// const actionCreators = { addGun, removeGun };
// App = connect(mapStatetoProps, actionCreators)(App);

@connect(
    state => ({num: state}),
    { addGun, removeGun }
)
class App extends React.Component{
    render() {
        return (
            <div>
                <h1>hello world { this.props.num }</h1>
                <button onClick={ this.props.addGun }>申请</button>
                <button onClick={ this.props.removeGun }>取消</button>
            </div>
        )
    }
}

export default App