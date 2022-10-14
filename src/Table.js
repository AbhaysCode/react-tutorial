import React from 'react';

const TableHead = ({characters}) =>{
    return(<thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
              </tr>
        </thead>
    )
    }
const TableBody = (props) =>{
    const rows = props.characterData.map((elem,index)=>{
        console.log("index is",index);
        console.log("Element.job is",elem.job);
        console.log("Element.name is",elem.name);
        return (
          <tr key={index}>
            <td>{elem.name}</td>
            <td>{elem.job}</td>
            <td><button onClick={()=>{props.removeCharacter(index)}}>Delete</button></td>
          </tr>
    )
    })
    return <tbody>{rows}</tbody>
}

class Table extends React.Component{
    render(){
        const {characterData,removeCharacter} = this.props;
        return(
        <table>
          <TableHead/>  
          <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
        )
    }
}

export default Table;