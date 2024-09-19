import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  imagenFondo1: string = 'assets/angular.png'; 
  imagenFondo2: string = 'assets/angular.png';
  uno = 'uno';
  dos = 'dos';
  tres = 'tres';
  cuatro = 'cuatro';
  cinco = 'cinco';

  titulo: string = 'Fot1';
  resultado!: string;
  urls = [
    'assets/angular.png',
    'assets/pokedex.png',
    'assets/vacuna.png',
    'assets/tienda.png',
    'assets/juego.png',
  ];
  videos!: string;

  currentBackground: boolean = true;
  mostrarVideo: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cambiarFondo(this.urls[0]); 
    
    
  }

  verImagenProyectos() {
    return this.urls;
  }

  verVideosProyectos() {
    const palabra = this.titulo.split('/').slice(-1)[0].split('.')[0];
    this.videos = 'assets/' + palabra + '.mp4';
  }

  cambiarFondo(imagen: string) {
    this.titulo = imagen.split('/').slice(-1)[0].split('.')[0];
    this.verVideosProyectos(); 
    console.log(this.videos);
    if (this.currentBackground) {
      this.imagenFondo2 = imagen;
    } else {
      this.imagenFondo1 = imagen;
    }
    this.currentBackground = !this.currentBackground;
    setTimeout(() => {
      const background1 = document.querySelector('.background1') as HTMLElement;
      const background2 = document.querySelector('.background2') as HTMLElement;
      if (this.currentBackground) {
        background1.classList.add('active');
        background2.classList.remove('active');
      } else {
        background1.classList.remove('active');
        background2.classList.add('active');
      }
    }, 50); 
  }

  irADetalles() {
    if (this.titulo === 'angular') {
      this.router.navigate(['/detalles', this.uno]);
    }
    if (this.titulo === 'pokedex') {
      this.router.navigate(['/detalles', this.dos]);
    }
    if (this.titulo === 'vacuna') {
      this.router.navigate(['/detalles', this.tres]);
    }
    if (this.titulo === 'tienda') {
      this.router.navigate(['/detalles', this.cuatro]);
    }
    if (this.titulo === 'juego') {
      this.router.navigate(['/detalles', this.cinco]);
    }
  }

  verTrailer() {
    this.mostrarVideo = true;
    const video = this.videoPlayer.nativeElement;
    video.src = this.videos; 

    video.currentTime = 10; 
    setTimeout(() => {
      video.pause();
      this.mostrarVideo = false;
    }, 5000); 
  }

  setVideoDuration(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.currentTime = 10; 
  }

  handleVideoError(event: Event) {
    console.error('Error al cargar el video:', event);
  }
}
