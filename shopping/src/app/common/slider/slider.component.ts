import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carouselOptions = 
    {
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  }
  
 
  images = [
    
    
    {
      text: "Festive Deer",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHNhbGUlMjBjbG90aGVzJTIwc2xpZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      text: "Festive Deer",
      image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxzYWxlJTIwY2xvdGhlcyUyMHNsaWRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      text: "Festive Deer",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsZSUyMGNsb3RoZXMlMjBzbGlkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      text: "Festive Deer",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbGUlMjBjbG90aGVzJTIwc2xpZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }


}
