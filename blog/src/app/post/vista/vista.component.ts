import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-individual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-individual.component.html',
  styleUrl: './vista-individual.component.css'
})
export class VistaIndividualComponent{
        id!: number;
        post!: Post;

        constructor(
          public postService: PostService,
          private route: ActivatedRoute,
          private router: Router
        ) {}

        ngOnInit(): void {
          this.id = this.route.snapshot.params['id'];
          // this.postService.find(this.id).subscribe((data:Post) => {
          //     this.post = data;
          // });
          this.getPostDetails();
        }

        getPostDetails(): void {
          this.postService.find(this.id).subscribe((data: Post) => {
              this.post = data;
          });
      }
}