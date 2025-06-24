import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ requis pour *ngFor et date pipe

import { Eleve, ElevesService } from '../../services/eleves.service';

@Component({
  selector: 'app-list-eleves',
  standalone: true, // ✅ indique que c'est un composant standalone
  imports: [CommonModule], // ✅ obligatoire pour *ngFor, *ngIf, pipes (ex: date)
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css'] // optionnel, mais utile
})
export class ListElevesComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(
    private svc: ElevesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(data => this.eleves = data);
  }

  edit(e: Eleve) {
    this.router.navigate(['/eleves/editer', e.id]);
  }

  delete(e: Eleve) {
    if (confirm(`Supprimer ${e.prenom} ${e.nom} ?`)) {
      this.svc.delete(e.id!).subscribe(() => this.load());
    }
  }
}
