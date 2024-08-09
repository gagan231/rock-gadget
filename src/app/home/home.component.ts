import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TextImageComponent } from '../shared/text-image/text-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, TextImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
