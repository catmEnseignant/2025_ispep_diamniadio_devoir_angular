import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElevesServiceService } from '../../services/eleves/eleves-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-eleves-list',
  imports: [CommonModule,],
  templateUrl: './eleves-list.component.html',
  styleUrl: './eleves-list.component.css'
})
export class ElevesListComponent implements OnInit{
  eleves:any
  nombres_eleve:number = 0


  constructor(private route:Router,private elevesService: ElevesServiceService){
    console.log("constructeurr")
  }
  ngOnInit(){
    this.elevesService.getEleves().subscribe(
      (response) => {
        this.eleves = response
        console.log(this.eleves.length)
      },
      (error) => {
        console.log(error )
      },
    )
    //this. nombres_eleve = this.classes.length
    //console.log(this.nombres_eleve) 
    
  }
  editEleves(editEleves:any){
    console.log(editEleves)
    editEleves = JSON.stringify(editEleves)
    localStorage.setItem("curentClasse",editEleves)
    localStorage.setItem("editEleves","1")
    return this.route.navigate(["/eleves/eleves-form"])

  }
  addEleves(){
    //console.log("add initialiser")
    localStorage.setItem("editEleves","0")
    return this.route.navigate(["/eleves/eleves-form"])
  }
  deleteEleves(eleves:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.elevesService.deleteEleves(eleves.id).subscribe(
        (response) => {
          alert("classe bien supprimer")        
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(eleves)
  }
}
