import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 /*  mensajes: any[string] = []; */
  mensajes: any; //puntero para ahorrar memoria

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.mensajes = this.dataService.getPosts();
/*     .subscribe(posts => {
      console.log(posts);
      this.mensajes = posts; //subscribe es para tratar el observable
    }); */
  }

}
