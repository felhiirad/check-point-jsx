import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';



/*function App() {
  // we can also put function in ather function 
  function createForme(){
    if(isMonday){

	return <p>We are closed!</p>
	}
	// else se recrit auto
  let input = (<input type="text" placeholder="Name"/>);
  let button = <button>Submit</button>;
  return (
    <form>
      {input}
      {button}
    </form>
  );
  
  return (
  
    <div className="App">
          
          {createForme()}

    </div>
  );
  }
}*/
/*const firstName=prompt("donner votre nom et votre prenom");
function App(){
  return(
    <div className="App">
      <p> Hello {firstName || "Anonymous"} </p>
      <p> it look like you {firstName ? "have":"dont have" } a name </p>
      {
				!firstName && (
        <form>
						<p className="Appp"> Type your name here </p>
						<input type="text"  placeholder="your name" />
          </form>)
			}
		</div>
  
  )
}*/
function App(){
  return(
<div style={{border:'solid 1px black ', maxWidth:'100vW'}}>
  <h1 className=' titelRed'>Name:john</h1>
  <>.<br /> <h1 className=' titelRed'>Prenom:john</h1></>

  <img src={logo} className="App-logo" alt="logo" />
  .<br /><div className="repImg"><img src='/imageInPublic.jpg' alt = "sorry" /></div>
    
  <div className="vid">
  <video controls autostart autoPlay src='/video.mp4' type="video/mp4" width ='320' height = '240' />
  </div>
    </div>


  )
  

}


export default App;


