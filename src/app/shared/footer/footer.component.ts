import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer mt-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="mb-3">
              <i class="bi bi-mortarboard-fill me-2"></i>
              Gestion Scolaire
            </h5>
            <p class="mb-0">
             Gestion etablissement des eleves et d'enseignants de Mbour
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="mb-3">
              <h6>Contact</h6>
              <p class="mb-1">
                <i class="bi bi-envelope me-2"></i>
                c.faye5isepat.edu.sn
              </p>
              <p class="mb-0">
                <i class="bi bi-telephone me-2"></i>
                +221 77 333 33 33 
              </p>
            </div>
          </div>
        </div>
        <hr class="my-3">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="text-muted mb-0">
              © 2025 Mbour. Tous droits réservés.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <small class="text-muted">
              Développé avec <i class="bi bi-heart-fill text-danger"></i> Par Coumba Faye
            </small>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}