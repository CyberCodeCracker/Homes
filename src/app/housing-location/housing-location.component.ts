import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { RouterModule } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {

  @Input() housingLocation! : HousingLocation;
}
