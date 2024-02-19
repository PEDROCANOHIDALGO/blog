import { CommonModule, getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
    public posts: Post[] = [];
  
  constructor(private postService: PostService){}
    
    ngOnInit(): void {
      this.postService.getAll().subscribe(post => (this.posts = post));
    }
    borrar(post: Post): void {
      this.postService.delete(post.id).subscribe(
        () => {
          console.log('Post eliminado exitosamente');
          this.posts = this.posts.filter(p => p.id !== post.id);
        },
        error => {
          console.error('Error al eliminar el post: ', error);
        }
      );
    }
}