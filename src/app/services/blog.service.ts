import { Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { chineseArchitecturePosts } from '../content/chinese/chinese-architecture.data';
import { indianArchitecturePosts } from '../content/indian/indian-architecture.data';
import { europeanArchitecturePosts } from '../content/european/european-architecture.data';
import { japaneseArchitecturePosts } from '../content/japanese/japanese-architecture.data';
import { islamicArchitecturePosts } from '../content/islamic/islamic-architecture.data';
import { africanArchitecturePosts } from '../content/african/african-architecture.data';
import { futureArchitecturePosts } from '../content/future/future-architecture.data';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    ...chineseArchitecturePosts,
    ...indianArchitecturePosts,
    ...europeanArchitecturePosts,
    ...japaneseArchitecturePosts,
    ...islamicArchitecturePosts,
    ...africanArchitecturePosts,
    ...futureArchitecturePosts
  ];

  private postsSignal = signal<BlogPost[]>(this.blogPosts);

  getAllPosts() {
    return this.postsSignal();
  }

  getPostById(id: string): BlogPost | undefined {
    return this.postsSignal().find(post => post.id === id);
  }

  getPostsByRegion(region: string): BlogPost[] {
    if (region === 'All') {
      return this.postsSignal();
    }
    if (region === 'Future') {
      return this.postsSignal().filter(post => post.region === 'Other');
    }
    return this.postsSignal().filter(post => post.region === region);
  }

  getFeaturedPosts(): BlogPost[] {
    return this.postsSignal().slice(0, 3);
  }

  getRegions(): string[] {
    const regions = this.postsSignal().map(post => post.region);
    const uniqueRegions = Array.from(new Set(regions));
    return ['All', ...uniqueRegions, 'Future'];
  }
}