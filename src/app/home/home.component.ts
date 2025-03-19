import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpFeatureKind } from '@angular/common/http';




@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private homeService: HomeService){}

  toggleForms() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");

    if (loginForm && registerForm) {
      loginForm.classList.toggle("hidden");
      registerForm.classList.toggle("hidden");
    }
  }

  login() {
    let email = (document.getElementById("loginEmail") as HTMLInputElement).value;
    let password = (document.getElementById("loginPassword") as HTMLInputElement).value;
    
    if (email === "" || password === "") {
      alert("Please fill in all fields!");
      return;
    }
    alert("Login Successful! 🚀");
  }

  register() {
    let fullName = (document.getElementById("registerName") as HTMLInputElement).value;
    let email = (document.getElementById("registerEmail") as HTMLInputElement).value;
    let password = (document.getElementById("registerPassword") as HTMLInputElement).value;

    if (fullName=== "" || email === "" || password === "") {
      alert("Please fill in all fields!");
      return;
    }

    const userData = { fullName, email, password }; 

    this.homeService.registerUser(userData).subscribe({
      next: (response: any) => {
        alert("Registration Successful! 🎉");
        console.log("Success:", response);
        this.toggleForms();
      },
      error: (error: any) => {
        alert("Registration Failed! ❌");
        console.error("Error:", error);
      }
    });
  }
}


