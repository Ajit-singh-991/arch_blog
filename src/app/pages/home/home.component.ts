import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../services/blog.service';
import { RegionService } from '../../services/region.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  featuredPosts: BlogPost[] = [];
  regions: any[] = [];

  constructor(
    private blogService: BlogService,
    private regionService: RegionService,
    private sanitizer: DomSanitizer,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.featuredPosts = this.blogService.getFeaturedPosts();
    this.regions = this.regionService.getRegions().map(region => ({
      ...region,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(region.svg)
    }));
  }
}