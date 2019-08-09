import React from 'react';


export default class Beb extends React.Component{


    componentDidMount() { 
    setTimeout(()=>{alert("hello")},2000 );
}

componentWillMount(){
    alert("goodbye");
}
render(){
return(
<div>
</div>)
}
}
