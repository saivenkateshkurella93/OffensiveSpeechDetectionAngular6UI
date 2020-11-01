import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    rest = "http://localhost:8080/predict?text="
    products: any;

    constructor(private userService: UserService, private httpClient: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.httpClient.get(this.rest+"heyy you whats up").subscribe(
            data  => {
            console.log("POST Request is successful ", data);
            },
            error  => {
            
            console.log("Error", error);
            
            });
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