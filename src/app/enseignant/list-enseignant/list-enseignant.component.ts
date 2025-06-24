import { Component, OnInit } from '@angular/core';
import { EnseignantServiceService } from '../../services/enseignant/enseignant-service.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../../pages/loader/loader/loader.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-enseignant',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './list-enseignant.component.html',
  styleUrl: './list-enseignant.component.css'
})
export class ListEnseignantComponent implements OnInit{
  enseignants:any;
  loading : boolean = false

  constructor(private enseignantservice:EnseignantServiceService, private route:Router){
    console.log("Hello word enseignants")
  }

  ngOnInit(): void {
    this.enseignantservice.getEnseignats().subscribe(
     (reponse) => {
      console.log(reponse)
      this.enseignants = reponse
      this.loading = true
    },
    (er) => {
      console.log(er)
      this.loading = true
    } 
    )
  }

  public ajouterEnseignants () {
    localStorage.setItem("edit", "0")
    return this.route.navigate(['enseignants/form-enseignant'])
  }

  public editEnseignant (byId:any){
    console.log(byId)
    byId = JSON.stringify(byId)
    localStorage.setItem("enseignant", byId)
    localStorage.setItem("edit", "1")
    return this.route.navigate(['enseignants/form-enseignant'])
  }

  public supprimerEnseignant (byId:any) : void {
    let message = confirm("Voulez-vous vraiment supprimer cet enseignant")
    if(message){
      this.enseignantservice.deleteEnseignants(byId.id).subscribe(
        (reponse) => {
          console.log(reponse)
          alert("Enseignant supprimer avec succes !")
          location.reload()
        },
        (er) => console.log(er)
      )
    }
  }
}
