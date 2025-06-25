import { Component, OnInit } from '@angular/core';
import { ElevesService, Eleve } from '../../services/eleves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleves-list',
  templateUrl: './eleves-list.component.html',
  styleUrls: ['./eleves-list.component.css']
})
export class ElevesListComponent implements OnInit {

  eleves: Eleve[] = [];
  loading = true;

  constructor(private elevesService: ElevesService, private router: Router) {}

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves() {
    this.loading = true;
    this.elevesService.getEleves().subscribe(data => {
      this.eleves = data;
      this.loading = false;
    });
  }

  onEdit(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/eleves/modifier', id]);
    }
  }

  onDelete(id: number | undefined) {
    if (!id) return;
    if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
      this.elevesService.deleteEleve(id).subscribe(() => {
        this.loadEleves();
      });
    }
  }

  onAdd() {
    this.router.navigate(['/eleves/ajouter']);
  }
}
