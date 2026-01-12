import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgbDropdownModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  regions: string[] = [];
  selectedRegion: string = 'All';
  searchQuery: string = '';

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.regions = this.blogService.getRegions();
    this.posts = this.blogService.getAllPosts();
    
    this.route.queryParams.subscribe(params => {
      this.selectedRegion = params['region'] || 'All';
      this.filterPosts();
    });
  }

  filterPosts() {
    let filtered = this.posts;

    // Filter by region
    if (this.selectedRegion !== 'All') {
      if (this.selectedRegion === 'Future') {
        filtered = filtered.filter(post => post.region === 'Other');
      } else {
        filtered = filtered.filter(post => post.region === this.selectedRegion);
      }
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.country.toLowerCase().includes(query)
      );
    }

    this.filteredPosts = filtered;
  }

  onRegionChange(region: string) {
    this.selectedRegion = region;
    this.filterPosts();
  }

  onSearchChange() {
    this.filterPosts();
  }
}