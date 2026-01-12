import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbAccordionModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.post = this.blogService.getPostById(id);
      
      if (this.post) {
        // Get related posts from the same region
        const allPosts = this.blogService.getAllPosts();
        this.relatedPosts = allPosts
          .filter(p => p.id !== id && p.region === this.post!.region)
          .slice(0, 3);
      }
    });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }
}