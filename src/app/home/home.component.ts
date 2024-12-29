import { Component, Inject, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { CommonModule } from "@angular/common";
import { HousingService } from "../housing.service";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
          *ngFor="let housingLocation of filteredHousingLocationList"
          [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
    this.filteredHousingLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList.filter((housingLocation) => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

  housingLocationList: HousingLocation[] = [];
}
