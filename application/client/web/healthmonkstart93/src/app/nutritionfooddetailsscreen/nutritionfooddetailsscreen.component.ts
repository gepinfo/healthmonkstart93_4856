import { Component, OnInit } from '@angular/core';
import { NutritionfooddetailsscreenService } from './nutritionfooddetailsscreen.service';

@Component({
  selector: 'app-nutritionfooddetailsscreen',
  templateUrl: './nutritionfooddetailsscreen.component.html',
  styleUrls: ['./nutritionfooddetailsscreen.component.scss'],
})

export class NutritionfooddetailsscreenComponent implements OnInit {
    public nutritionfood = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private nutritionfooddetailsscreenService: NutritionfooddetailsscreenService,
    ) { }

    ngOnInit() {
        this.nutritionfood.created_by = sessionStorage.getItem('email') || ''; 
    }
}