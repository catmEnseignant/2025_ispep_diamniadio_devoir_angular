import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer style="background-color: #f8f9fa; padding: 1rem 0; margin-top: 2rem; font-size: 14px; color: #333;">
      <div style="max-width: 1000px; margin: auto; padding: 0 1rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
          <div style="flex: 1 1 60%;">
            <strong>ISEP Diamniadio - Gestion Académique</strong>
          </div>
          <div style="flex: 1 1 35%; text-align: right;">
            <p style="margin: 0;">📧 contact&#64;ispep.sn</p>
            <p style="margin: 0;">📞 +221 33 XXX XX XX</p>
            <p style="margin: 0;">📍 Diamniadio, Sénégal</p>
          </div>
        </div>
        <hr style="margin: 1rem 0;">
        <p style="text-align: center; margin: 0;">&copy; {{ currentYear }} ISPEP Diamniadio. Tous droits réservés.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
