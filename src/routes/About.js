import React from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import YouTube from '../components/YouTube.jsx';
import auth from "../services/authService.js";


function textShow() {
    var x = document.getElementById("paragraph2");
    console.log(x.style.display);
    if (x.style.display === "none")
    {
        x.style.display = "inline-block";
    } 
    else 
    {
        x.style.display = "none";
    }
}

export default class Auth extends React.Component{
    render()  {
        console.log(auth.isAuth())
        
        return(
            
            <div class="w3-container">
            <NavBar/>
                
                

                <div  class="w3-panel w3-leftbar w3-sand w3-xxlarge w3-serif">
                    <img id="gorillaPic" src="https://i1.wp.com/gorillagainz.net/wp-content/uploads/2016/10/Untitled-1.png?resize=931%2C450&ssl=1" alt="Trulli" width="800" height="500"></img>
                    <p id="paragraph">Gorilla Gainz is your provider of quality GAINZ, trough a varied assortment of protein, creatine and all sorts of other supplements</p>
                    <br/>
                    <button class="button button1" onClick={textShow}>Gorilla Factz</button>
                    <br/>
                    
                    <p id="paragraph2" ref="paragraph22" >Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western gorillas (both critically endangered), and either four or five subspecies. They are the largest living primates. Gorillas are the largest and most powerful of the apes. ... Gorillas are native to the equatorial regions of Africa. The mountain gorilla is the largest of the gorilla subspecies. It inhabits a number of isolated areas on the forested mountain slopes of eastern Zaire and parts of Uganda and Rwanda.</p>
                    
                
                
                    

                </div>

            < Footer />

            </div>
        )
    }
}