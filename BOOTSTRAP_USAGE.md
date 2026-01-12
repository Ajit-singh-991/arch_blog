# Bootstrap Usage Guide

Bootstrap 5.3.8 and ng-bootstrap 20.0.0 have been successfully installed and configured in your Angular project.

## Setup Complete ✅

- ✅ Bootstrap CSS imported in `src/styles.css`
- ✅ ng-bootstrap installed
- ✅ @angular/animations installed and configured
- ✅ Animations provider added to `app.config.ts`

## How to Use Bootstrap

### 1. Using Bootstrap CSS Classes

You can use Bootstrap utility classes directly in your templates:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary Button</button>
    </div>
  </div>
</div>
```

### 2. Using ng-bootstrap Components

Import ng-bootstrap modules in your standalone components:

```typescript
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgbModule, CommonModule],
  // ...
})
```

Then use in templates:

```html
<!-- Modal -->
<ngb-modal>
  <!-- Modal content -->
</ngb-modal>

<!-- Dropdown -->
<div ngbDropdown>
  <button ngbDropdownToggle>Dropdown</button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem>Action</a>
  </div>
</div>

<!-- Carousel -->
<ngb-carousel>
  <ng-template ngbSlide>Slide 1</ng-template>
  <ng-template ngbSlide>Slide 2</ng-template>
</ngb-carousel>
```

### 3. Available Bootstrap Components

- **Buttons**: `btn`, `btn-primary`, `btn-secondary`, etc.
- **Cards**: `card`, `card-body`, `card-header`, etc.
- **Grid System**: `container`, `row`, `col-*`, etc.
- **Forms**: `form-control`, `form-group`, `form-label`, etc.
- **Navbar**: `navbar`, `navbar-nav`, `nav-item`, etc.
- **Modals**: ng-bootstrap `NgbModal`
- **Dropdowns**: ng-bootstrap `NgbDropdown`
- **Carousels**: ng-bootstrap `NgbCarousel`
- **Tooltips**: ng-bootstrap `NgbTooltip`
- **Popovers**: ng-bootstrap `NgbPopover`
- And many more...

### 4. Combining with Tailwind CSS

You can use both Bootstrap and Tailwind CSS together. Bootstrap provides components and utilities, while Tailwind provides additional utility classes.

### 5. Customization

Bootstrap variables can be customized by creating a custom SCSS file or overriding CSS variables in `styles.css`.

## Example: Using Bootstrap in Your Components

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, NgbModule],
  template: `
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Bootstrap Card</h5>
        </div>
        <div class="card-body">
          <p class="card-text">This is a Bootstrap card component.</p>
          <button class="btn btn-primary">Click Me</button>
        </div>
      </div>
    </div>
  `
})
export class ExampleComponent {}
```

## Documentation

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [ng-bootstrap Documentation](https://ng-bootstrap.github.io/#/home)

