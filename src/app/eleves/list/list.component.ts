import {Component, OnInit} from '@angular/core';
import {ElevesService} from "../../servicec/eleves.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  eleves:any
  constructor(private se:ElevesService,private route:Router,private router:ActivatedRoute) {
  }
 ngOnInit() {
   this.getAllEleves()
 }
 getAllEleves(){
    this.se.getAllEleves().subscribe(data=>{
      this.eleves = data;
    })
  }

    updated(id: number) {
      console.log(id);
     return this.route.navigate(["eleves/edit/",id])
    }

    delete(id:number) {
      console.log(id);
        return this.se.deleteEleves(id).subscribe(data=>{
            alert("ok")
            this.route.navigate(['eleves'])
        })
    }
}
