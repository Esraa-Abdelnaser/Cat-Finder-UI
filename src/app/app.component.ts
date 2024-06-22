import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ContactComponent} from "./components/contact/contact.component";
import {UserHomeComponent} from "./components/user-home/user-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    ContactComponent,
    UserHomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-realem-ui';
}
