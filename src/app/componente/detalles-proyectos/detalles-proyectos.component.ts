import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-proyectos',
  templateUrl: './detalles-proyectos.component.html',
  styleUrls: ['./detalles-proyectos.component.css']
})
export class DetallesProyectosComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  imagen!: String | null;
  re!: String;
  descripcion!: string;
  titulo!: string;
  creadores!: string;
  tecnologias: string [] = [];
  videos!:string;
  enlace!:string;

  constructor(private r: ActivatedRoute) {}

  ngOnInit(): void {
    this.imagen = this.r.snapshot.paramMap.get('url');
    if (this.imagen === 'uno') {
      this.videos = 'assets/angular.mp4';
      this.re = 'assets/angular.png';
      this.titulo = 'LOCAL GLOVO';
      this.descripcion = 'Local Globo es un proyecto trabajado en Spring Boot, Angular y Flutter. ' +
        'El proyecto se trata de la conocida aplicación Glovo, en la que puedes comprar cualquier tipo de producto en cualquier tipo de mercado. ' +
        'La aplicación permite a los usuarios realizar pedidos en línea y recibir sus productos en la puerta de su casa. ' +
        'Además, incluye características como seguimiento en tiempo real, opciones de pago seguras y una interfaz de usuario intuitiva.';
      this.creadores = 'Miguel Ángel Pérez Álvarez';
      this.tecnologias = ['spring', 'angular', 'flutter', 'git', 'docker', 'java', 'dart'];
      this.enlace = 'https://github.com/mgaangel10/LocalGlovo.git';
    } 
    if (this.imagen === 'dos') {
      this.videos = 'assets/pokedex.mp4';
      this.re = 'assets/pokedex.png';
      this.titulo = 'POKEDEX';
      this.descripcion = 'Es un proyecto simple utilizando la API de PokeAPI. ' +
        'La aplicación permite a los usuarios buscar y ver información detallada sobre diferentes Pokémon. ' +
        'Incluye características como la búsqueda por nombre o número de Pokédex, y la visualización de estadísticas, habilidades y evoluciones de cada Pokémon.';
      this.tecnologias = ['git', 'javascript', 'jquery'];
      this.creadores = 'Miguel Ángel Pérez Álvarez';
      this.enlace = 'https://github.com/krobert151/NuestraPokedexMolona.git';
    } 
    if (this.imagen === 'tres') {
      this.videos = 'assets/vacuna.mp4';
      this.re = 'assets/vacuna.png';
      this.titulo = 'VACUNA';
      this.descripcion = 'El proyecto Vacuna es una aplicación web que registra las vacunas de los pacientes, siendo el administrador quien lo configura. ' +
        'La aplicación permite a los administradores gestionar los registros de vacunación, programar citas y enviar recordatorios a los pacientes. ' +
        'Utiliza JWT y Spring Security para la autenticación y autorización de usuarios, garantizando la seguridad de los datos.';
      this.tecnologias = ['spring', 'angular', 'git', 'docker', 'java'];
      this.creadores = 'Miguel Ángel Pérez Álvarez';
      this.enlace = 'https://github.com/VaxConnect/VaxConnectApi.git';
    }
    if (this.imagen === 'cuatro') {
      this.videos = 'assets/tienda.mp4';
      this.re = 'assets/tienda.png';
      this.titulo = 'GESTIÓN DE TIENDA';
      this.descripcion = 'El proyecto es una aplicación web utilizada para la gestión de una tienda. ' +
        'Permite a los usuarios realizar cobros a los clientes y gestionar el inventario de productos. ' +
        'Incluye características como la gestión de ventas, control de stock, generación de informes y una interfaz de usuario amigable.';
      this.tecnologias = ['spring', 'react', 'git', 'java'];
      this.creadores = 'Miguel Ángel Pérez Álvarez';
      this.enlace = 'https://github.com/alvruigut/Gestion-Inventario-Tienda.git';
    }
    if (this.imagen === 'cinco') {
      this.videos = 'assets/juego.mp4';
      this.re = 'assets/juego.png';
      this.titulo = 'JUEGO 2D';
      this.descripcion = 'El proyecto es un juego hecho en 2D orientado en el juego de Minecraft, en el que debes recoger los 4 diamantes para ganar. ' +
        'El juego incluye diferentes niveles y desafíos, y utiliza la biblioteca de Pygame para la creación de gráficos y la gestión de eventos. ' +
        'Es una excelente manera de aprender sobre desarrollo de juegos y programación en Python.';
      this.tecnologias = ['pycharm', 'python', 'git'];
      this.creadores = 'Miguel Ángel Pérez Álvarez';
      this.enlace = 'https://github.com/mgaangel10/robotgame.git';
    }
    
    else {
      null;
    }
    console.log(this.re);
    console.log(this.videos);
    
  }

  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.addEventListener('play', this.enterFullScreen.bind(this));
  }

  enterFullScreen(): void {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
  }
   ViewChild(arg0: string): (target: DetallesProyectosComponent, propertyKey: "videoPlayer") => void {
    throw new Error('Function not implemented.');
  }
}

  

 




