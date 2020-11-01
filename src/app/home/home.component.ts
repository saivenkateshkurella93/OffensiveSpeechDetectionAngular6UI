import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    rest = "http://localhost:5000/predict?text="
    products: any;
    result: any;
    resultbinding: any;

    constructor(private userService: UserService, private httpClient: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        
    }
    textValue = '';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
    this.resultbinding='';
    this.httpClient.get(this.rest+value).subscribe(
        data  => {
        console.log("POST Request is successful ", data);
        let filters = ["bitch", "nigger", "fuck", "fucking", "fucker", "fag", "rape", "rapes", "raped", "rapist", "faggot", "nigga",
            "savage", "idiot", "idiots", "dumb", "ass", "dumbass", "homo", "gay", "bloody", "stupid", "shit","crap", "bullshit"
        ];
        let filtersSet = new Set(filters);
        let words = value.split(" ");
        let isNeither = true;
        for (let word of words) {
            if (filtersSet.has(word.trim())) {
                isNeither = false;
            }
        }
        this.result = data;
            if(this.result.prediction == "NEITHER"){
                this.resultbinding = "Cool! Your language looks neat.";
            }
            else if (this.result.prediction == "OFFENSIVE_LANGUAGE") {
                if (isNeither) {
                    this.resultbinding = "Cool! Your language looks neat.";
                } else {
                    this.resultbinding = "Uhmm!Looks like your Language has Offensive words or context.";
                }
            }
            else if(this.result.prediction == "HATE_SPEECH") {
                if (isNeither) {
                    this.resultbinding = "Cool! Your language looks neat.";
                } else {
                    this.resultbinding = "That's a Hate Speech!";
                }
            }
       
        },
        error  => {
        
        console.log("Error", error);
        
        });

  }

 clear(): string{
    this.resultbinding = '';
    this.result.prediction='';
    return '';

  }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    // getProducts() {
    //     this.products = [];
    //     this.rest.getProducts().subscribe((data: {}) => {
    //       console.log(data);
    //       this.products = data;
    //     });
    //   }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}