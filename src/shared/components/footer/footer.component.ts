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
              <i class="bi bi-mortarboard-fill me-2"></i>
              ISEP Diamniadio - Gestion Académique
            </h5>
         
          
         
          </div>
          <div class="col-md-4 text-md-end">
            <p class="mb-2">
              <i class="bi bi-envelope-fill me-2"></i>
              contact&#64;ispep.sn
            </p>
            <p class="mb-2">
              <i class="bi bi-telephone-fill me-2"></i>
              +221 33 XXX XX XX
            </p>
            <p class="mb-0">
              <i class="bi bi-geo-alt-fill me-2"></i>
              Diamniadio, Sénégal
            </p>
          </div>
        </div>
        <hr class="my-4">
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0">&copy; {{ currentYear }} ISPEP Diamniadio. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}