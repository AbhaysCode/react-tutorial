import React from 'react';

class App extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
        fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").
        then(res=>res.json())
        .then(res=>{
            this.setState({"data":res})
        })
    }
    render(){
        const {data} = this.state;
        const result = data.map((entry)=>{return <li>{entry}</li>})
        return <ul>{result}</ul>;
    }
}
export default App;