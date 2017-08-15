import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Movie } from './movie';
//import {DatepickerModule} from 'boostrap';

@Component({
    selector: 'movie-form',
    templateUrl: './movie-form.component.html'
})

export class MovieFormComponent implements OnInit{
    model: Movie;
    //releaseDatePicker: BootstrapV3DatetimePicker.Datetimepicker;
    
    constructor(private http: HttpClient) {
        // this.http.get('http://localhost:3000/api/movie').subscribe(data => {
        //     this.model = new Movie( data['title'], data['release date'], data['duration'], data['genre'], data['synopsis']);
        // }
        this.model = new Movie("", "", "", "", "");
    }

    ngOnInit(): void {
        // this.auctionDatePicker = $("#auctiondatepicker")
        // .datetimepicker({
        //     useCurrent: false,
        //     format: "MM/DD/YYYY",
        //     minDate: moment()
        // })
        // .data("DateTimePicker");

        this.http.get('http://localhost:3000/api/movie').subscribe(data => {
            this.model = new Movie( data['title'], data['release date'], data['duration'], data['genre'], data['synopsis']);
        });
    }

    submitted = false;
    
    onSubmit(){
        this.submitted = true;
        this.http.post('http://localhost:3000/api/movie', {
                "title": this.model.title,
                "release date": this.model.releaseDate,
                "duration": this.model.duration,
                "genre": this.model.genre,
                "synopsis": this.model.synopsis
            }).subscribe(data => {
                // this.model = new Movie( data['title'], data['release date'], data['duration'], data['genre'], data['synopsis']);
        });
    }
}