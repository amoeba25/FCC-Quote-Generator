import './App.css';
import React, { Component } from 'react'


//Quote compoennt
class Quote extends Component{

  getData(){
    fetch('quotes.json')
    .then(item => item.json())
    .then(text => {
      const randomElement = Math.floor(Math.random() * text.length);
      document.getElementById('text').innerText= text[randomElement].quote;
      document.getElementById('author').innerText= '-'+ text[randomElement].author;
      document.getElementById('col1').style.backgroundImage= `url{(${text[randomElement].img})}`;
      document.documentElement.style.setProperty('--color', text[randomElement].hue);
    })
    .catch(err => console.log(err))

  }
  postData(){
    let twitter_link='https://twitter.com/intent/tweet'
    let currentQuote= document.getElementById('text').innerText; 
    document.getElementById('tweet-quote').href=`${twitter_link}?text="${currentQuote}"`;
  }
  
  render() {
    return(
      <>
      <div className='col' id='col1'>
        <div id='socials'>
          <a id='tweet-quote' title='tweet this quote' target='_top' onClick={this.postData}><i class="fab fa-twitter"></i></a>      
          <a id='facebook-quote' title='post this on facebook' href='#' target='_top'><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div className='col' id='col2'>
        <div id='quoteslide'>
          <i class="fas fa-quote-left quotes"></i>
          <div id='quotetext'>
            <div id='maintext'>
              <p id='text'> Tum pehle bhi itni khoobsurat thi ya waqt ne kiya koi haseen sitam?</p>
              <p id='author'>- Bunny</p>
            </div>
            <div id='button'>
              <button id='new-quote' onClick={this.getData}>Quote</button>
            </div>
          </div>
        </div>
      </div>
    
      </>
    )
  }
}


class App extends Component{
  
  render(){
    return(
      <>
      <h1 id='main-title'>YJHD Quote Generator! </h1>
      <div id='quotebox'>
        <Quote />
      </div>
      </>
      
    )
  }
}

export default App;
