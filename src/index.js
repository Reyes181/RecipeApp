// USE THIS FOR REQUEST, https://api.edamam.com/search?q=chicken&app_id=9f1eeb8f&app_key=b1ecd6c3f71ef0ec2a37e7489b7f7c61&from=10

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/styles.css'
import CircularProgress from '@material-ui/core/CircularProgress';


// COMPONENTS
import Header from './components/header';
import NewsList from  './components/news_list';
import {APP_ID, APP_KEY} from './components/config';

class App extends Component {

    state = {
        loading:true,
        home:true,
        search:[],
        results:[],
        amount: 10
    }

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        
        this.setState({
            search: keyword
        })
       // console.log(filtered)
    }
    
    getSearch = () => {
        axios.get(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${this.state.amount}`)
        .then(response => {
            this.setState({
                results: response.data.hits,
                loading: false,
                home:false
            });
            
          })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
    }
    
    addMore = () => {
        this.setState({
            amount: this.state.amount + 10
        })
        this.getSearch()
        
    }

    render(){
        console.log(APP_ID)
        return (
            <div>
                 <Header keywords={this.getKeyword} searches={this.getSearch}/>
                 {this.state.home ?
                    <div className="home_wrapper">
                        <div className="top_title">
                            Enter <span id="bold">indgridents</span> 
                        </div>
                        <div className="bottom_title">
                            & search for <span id="bold">recipes</span>
                        </div>
                    </div>
                 :
                  this.state.results.length !== 0 ?
                     this.state.loading ?
                        <CircularProgress
                             style={{ 
                                color: '#f0eeed'
                             }} 
                             thickness={7}
                        /> 
                      : 
                        <NewsList results={this.state.results}>
                            <button className="more_rec" onClick={this.addMore.bind(this)}>More recipes?</button>
                            <p className="info">*click again if list of recipes don't change.*</p>
                            <h3 className="result_header">
                                Meal ideas for {this.state.search} are:
                            </h3>
                        </NewsList>
                    :
                    <div className="home_wrapper">
                        <div className="top_title">
                            No recipes <span id="bold">found</span> 
                        </div>
                        <div className="bottom_title">
                            with those <span id="bold">indgridents</span>
                        </div>
                    </div>
                 }
            </div>
        )
    }  
}


ReactDOM.render(<App/>,document.querySelector('#root'));
