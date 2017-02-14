import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'
var slideIndex;
export default class TopMenu extends React.Component{

	constructor(props) {
        
        super(props);

        this.state = {
           hide :false,
           hideelse : false
        };
    }

    homePage(){
    	console.log('homePage')
    }


    gethrefs(){

    	let m=(<div>
    			<a href = 'index2.html'>Homepage</a>
    			<a href = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toArticle}>Article</a>
    		</div>)

    	return m;
    }


    plusSlides(n) {
        this.showSlides(slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(slideIndex = n);
    }
    
    showSlides(n) {

        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
    }
    render(){
        return this.gethrefs();
    }
    renders(){
        slideIndex = 1;
        this.showSlides(slideIndex);
        m=(<div><div class={"slideshow-container"}>
          <div class={"mySlides fade"}>
            <div class={"numbertext"}>1 / 3</div>
            <div><img src={"./img1.jpg"} className={'wid'}/></div>
            <div class={"text"}>Caption Text</div>
          </div>

          <div class={"mySlides fade"}>
            <div class={"numbertext"}>2 / 3</div>
            <div><img src={"./img2.jpg"} className={'wid'}/></div>
            <div class="text">Caption Two</div>
          </div>

          <div class={"mySlides fade"}>
            <div class={"numbertext"}>3 / 3</div>
            <div><img src={"./img3.jpg"} className={'wid'}/></div>
            <div class={"text"}>Caption Three</div>
          </div>

          <a class={"prev"} onclick={()=>plusSlides(-1)}>&#10094;</a>
          <a class={"next"} onclick={()=>plusSlides(1)}>&#10095;</a>
        </div>
        <div class ={'fuck'}>
          <span class={"dot"} onclick={()=>this.currentSlide(1)}></span> 
          <span class={"dot"} onclick={()=>this.currentSlide(2)}></span> 
          <span class={"dot"} onclick={()=>this.currentSlide(3)}></span> 
        </div>
        </div>
        );
    	return m;
    }
}
