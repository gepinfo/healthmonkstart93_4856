import { Component, OnInit } from '@angular/core';
import { RecommandedfoodService } from './recommandedfood.service';

@Component({
  selector: 'app-recommandedfood',
  templateUrl: './recommandedfood.component.html',
  styleUrls: ['./recommandedfood.component.scss'],
})

export class RecommandedfoodComponent implements OnInit {
    public food = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        kcal: '',
        carbohydrates: '',
        fats: '',
        protein: '',
        portion: '',
        portion_type: '',
        nutrients: '',
        tags: '',
    }
    public nutrient = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        portion: '',
        portion_type: '',
        tags: '',
    }
    public dish = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        kcal: '',
        carbohydrates: '',
        fats: '',
        protein: '',
        recepie: '',
        food_picture: '',
        foods: '',
        tags: '',
    }
    public meal = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        kcal: '',
        carbohydrates: '',
        fats: '',
        protein: '',
        dishes: '',
        notes: '',
        tags: '',
    }

    constructor (
        private recommandedfoodService: RecommandedfoodService,
    ) { }

    ngOnInit() {
        this.food.created_by = sessionStorage.getItem('email') || ''; 
        this.nutrient.created_by = sessionStorage.getItem('email') || ''; 
        this.dish.created_by = sessionStorage.getItem('email') || ''; 
        this.meal.created_by = sessionStorage.getItem('email') || ''; 
    }
}