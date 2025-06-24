import {Component, OnInit} from '@angular/core';
import {ElevesService} from "../../servicec/eleves.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EnseignantService} from "../../servicec/enseignant.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-enseignant',
  imports: [
    NgForOf
  ],
  templateUrl: './list-enseignant.component.html',
  styleUrl: './list-enseignant.component.css'
})
export class ListEnseignantComponent implements OnInit{
  eleves:any
  constructor(private se:EnseignantService,private route:Router,private router:ActivatedRoute) {
  }
  ngOnInit() {
    this.getAllEleves()
  }
  getAllEleves(){
    this.se.getAllEnseignant().subscribe(data=>{
      this.eleves = data;
    }) }

   updated(id:number){
    this.route.navigate(["enseignant/edit",id])
   }
 delete(id:number){
   return this.se.deleteEnseignant(id).subscribe(data=>{
     return this.route.navigate(["enseignant"])

   })
 }

}
