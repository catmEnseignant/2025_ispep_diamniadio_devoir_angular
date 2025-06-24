import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
      
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
               
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/eleves" routerLinkActive="active">
              
                Élèves
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/enseignants" routerLinkActive="active">
              
                Enseignants
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`

.navbar-brand {
  font-size: 2rem;            
  font-weight: 900;          
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;        
  color:rgb(93, 62, 27);            
  text-transform: uppercase;  
  transition: color 0.4s ease, transform 0.3s ease;
  cursor: pointer;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color:rgb(60, 46, 15);             
  transform: scale(1.1);     
  text-shadow: 0 2px 6px rgba(76, 44, 27, 0.5);
}

.nav-link {
  font-weight: 600;
  font-size: 1.1rem;
  color: #444;                
  padding: 0.6rem 1rem;
  border-radius: 6px;
  transition: color 0.3s ease, background-color 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.nav-link:hover,
.nav-link:focus {
  color:rgba(76, 44, 27, 0.5);            
  background-color:rgba(76, 44, 27, 0.5); 
  box-shadow: 0 4px 8px rgba(76, 44, 27, 0.5);
  text-decoration: none;
}


.nav-link.active {
  color:rgba(76, 44, 27, 0.5);
  font-weight: 700;
  border-bottom: 3px solidrgba(76, 44, 27, 0.5);
  padding-bottom: 0.5rem;
}

  
  `]
})
export class NavbarComponent {}