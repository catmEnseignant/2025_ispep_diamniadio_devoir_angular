import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h5 class="mb-3">
           
              <p>Mon Site Web</p>
        <p class="small">
          © 2025 Mon Site Web. Tous droits réservés.
        </p>
            </h5>
         
          
         
          </div>
          
        

          </div>
        </div>
        
          
    
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}