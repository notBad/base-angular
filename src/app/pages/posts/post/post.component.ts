import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
//decorador para recibir el mensaje desde "posts" con s
//  y poder piuntar la informacion del html
  @Input() mensaje: any;
//decorador para pasar datos al hacerf click
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    // console.log(this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);
  }
}