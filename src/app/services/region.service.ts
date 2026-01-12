import { Injectable } from '@angular/core';
import { Icons } from '../shared/icons';

@Injectable({
    providedIn: 'root'
})
export class RegionService {
    getRegions() {
        return [
            {
                name: 'Chinese',
                svg: Icons.chinese,
                image: 'https://images.unsplash.com/photo-1548625361-987612d9210d?q=80&w=2000&auto=format&fit=crop',
                description: 'Timeless elegance and philosophical depth',
                color: 'primary'
            },
            {
                name: 'Indian',
                svg: Icons.indian,
                image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop',
                description: 'Intricate carvings and spiritual symbolism',
                color: 'warning'
            },
            {
                name: 'European',
                svg: Icons.european,
                image: 'https://images.unsplash.com/photo-1548783267-33aca4414842?q=80&w=2000&auto=format&fit=crop',
                description: 'From classical columns to Gothic cathedrals',
                color: 'info'
            },
            {
                name: 'Japanese',
                svg: Icons.japanese,
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
                description: 'Minimalist elegance and nature harmony',
                color: 'success'
            },
            {
                name: 'Islamic',
                svg: Icons.islamic,
                image: 'https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?q=80&w=2000&auto=format&fit=crop',
                description: 'Geometric poetry and mathematical beauty',
                color: 'danger'
            },
            {
                name: 'African',
                svg: Icons.african,
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55cd?q=80&w=2000&auto=format&fit=crop',
                description: 'Ancient pyramids to sustainable design',
                color: 'secondary'
            },
            {
                name: 'Future',
                svg: Icons.future,
                image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
                description: 'AI, robotics, and the architecture of tomorrow',
                color: 'primary'
            }
        ];
    }
}
