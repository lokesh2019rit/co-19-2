import React from 'react';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/spinner';
import SearchBar from '../../components/UI/search bar/searchBar';
import TimeStamp from '../../components/timestamp/timestamp';
import Graphs from '../../containers/graphs/graphs';
import Table from '../../containers/Table/table';
import Head from '../../components/head/head';
import './homepage.css';




class Homepage extends React.Component{
    state={
        posts:[],
        Total:[],
        labels:[],
        loading:true
       
      }
      
    
      componentDidMount(){
    
        axios.get("https://api.covid19india.org/data.json")
              .then(response=>{
                
                this.setState({posts:response.data.statewise.slice(1,38) });
                this.setState({Total:response.data.statewise.slice(0,1)}); 
                this.setState({timeStamp:response.data.statewise.slice(0,1).lastupdatedtime});
                this.setState({loading:false})
              });
      }
    render(){

        let homepage=<div style={{marginLeft:'49%',marginTop:'20%'}}><Spinner/></div>;
        if(!this.state.loading){
            return homepage=<div className="App">
               <h1 className='heading'>COVID-19 INDIA TRACKER</h1>
            <div style={{textAlign:'center',marginLeft:'-75px'}}>
              
              <Head data={this.state.Total}/>
              
            </div>
            
            <div className='Content'>
            <div style={{marginTop:'10%'}} className='headerdiv'> <TimeStamp data={this.state.Total} /><SearchBar/> <Graphs style={{margin:'30px'}}/></div>
              <Table/> 
              
              
            </div>
           
          </div>
        }

        return(
          <div>
            
            <div>
            
                {homepage}
            </div>
          </div>
        );
    }
}
export default Homepage;