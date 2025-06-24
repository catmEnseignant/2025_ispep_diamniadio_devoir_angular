import { Component, OnInit } from '@angular/core';
import { EleveServiceService } from '../../services/eleve/eleve-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../../pages/loader/loader/loader.component";

@Component({
  selector: 'app-list-eleve',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './list-eleve.component.html',
  styleUrl: './list-eleve.component.css'
})
export class ListEleveComponent implements OnInit{

  eleves : any;
  loading : boolean = false; 

  constructor(private eleveService:EleveServiceService, private route:Router) {
    console.log("Hello word elves");
  }
   
  ngOnInit(): void {
    this.eleveService.getEleves().subscribe(
      (reponse) : void => {
        console.log(reponse)
        this.eleves = reponse
        this.loading = true
      },
      (error) : void => {
        console.log(error)
        this.loading = true
      }
    )
  }

  public ajouterEleve() {
    localStorage.setItem("edit", "0")
    return this.route.navigate(['eleves/form-eleve'])
  }

  public editEleve(byId:any) {
    console.log(byId)
    byId = JSON.stringify(byId)
    localStorage.setItem("eleve", byId)
    localStorage.setItem("edit", "1")
    return this.route.navigate(['eleves/form-eleve'])
  }

  public deleteEleve(byId:any) : void {
    let message = confirm("Voulez-vous vraiment supprimer cet élève ?");
    if(message){
      this.eleveService.deleEleves(byId.id).subscribe(
        (reponse) => {
          alert("Eleve supprimer avec succes !")
          location.reload();
          console.log(reponse)
        },
        (error) => {
          console.log(error)
        }
      )
      console.log(byId)
    }
  }
}
