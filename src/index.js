import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css"
import { reduceHooks } from 'react-table';



var style={
  fontFamily:'Book Antiqua',
  backgroundColor: 'white'
}
var style1={
  fontFamily:'Book Antiqua',
  backgroundColor: '#7da2a9'
  
}

class Fetch extends React.Component {
  constructor(props){
    super(props);
    this.state={
      posts:[],
      username:1
    }
  }

  
  componentDidMount(){
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url,{
      method:"GET"
    }).then(response=>response.json()).then(posts=>{ this.setState({posts:posts})})
    
  }
  showRow(id){
    console.log("id",id)
    

  }


  render(){
  
    
    const columns=[
      {
      Header: "User Id",
      accessor: "userId",
      width:100,
      maxWidth:100,
      minWidth:100,
      style:{backgroundColor: '#a0d2eb'}
    },
    
      {
        Header: "ID",
        accessor: "id",
        filterable:true,
        Width:100,
       maxWidth:100,
        minWidth:100,
        style:{backgroundColor:'#acf0c5'}
       },

        
        {
          Header:"UserName",
          style:{backgroundColor: '#f4f4f4'},
          filterable:true,
            Cell:props=>{
              return(
                 this.state.username==1? 'Ajay' :
                 this.state.username==2? 'Bunty':
                 this.state.username==3? 'Chintan':
                 this.state.username==4? 'Darshan':
                 this.state.username==5? 'Rakesh':
                 this.state.username==6? 'Mayank':
                 this.state.username==7? 'Ramesh':
                 this.state.username==8? 'Suresh':
                 this.state.username==9? 'Jay':
                 this.state.username==10? 'Prem': 'No Content'
              
              )
              }
          
          
        },
        {
          Header: "Title",
          accessor: "title",
          sortable:false,
          style:{backgroundColor: '#acf0c5'}
          
          },{
            Header: "Content",
            accessor: "body",
            sortable:false,
            filterable:false,
            style:{backgroundColor: '#a0d2eb'}
            
            }
    ]
    
  return (
    <div className="App" style={style}>
      <ReactTable
       columns={columns}
       data={this.state.posts}
       username={this.state.username}
       defaultPageSize={10}
       showPaginationBottom
       noDataText="Please Wait........">
         
        
        
      </ReactTable>
      
    
      
    </div>
    
    
  );
  }
}
class Tophead extends React.Component {
  render(){
    return(
      <div className="App" style={style1}>
        <h1 class="jumbotron jumbotron-fluid" >I am Moghan kumar</h1>
        <h2>Welcome to This Page...... It's My First Experience with React js</h2>
      </div>
    )
  }
}
ReactDOM.render(  
    
    <>
    <Tophead/>

    <Fetch />
    </>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
