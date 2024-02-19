import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-actualizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actualizacion.component.html',
  styleUrl: './actualizacion.component.css'
})
export class ActualizacionComponent {
  id!: number;
  post: Post = { id: 0, title: '', body: '' };
  updateForm!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.getPostDetails();
  }

  createForm(): void {
    this.updateForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  getPostDetails(): void {
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;
      this.updateForm.patchValue({
        title: this.post.title,
        body: this.post.body
      });
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const updatedPost: Post = {
        id: this.id,
        title: this.updateForm.value.title,
        body: this.updateForm.value.body
      };
  
      this.postService.update(this.id, updatedPost).subscribe(() => {
        // Alerta mostrada después de la actualización exitosa
        alert('¡Los cambios se guardaron correctamente!');
  
        // Actualizar los datos del post después de la edición
        //this.getPostDetails();
      });
    }
  }
}