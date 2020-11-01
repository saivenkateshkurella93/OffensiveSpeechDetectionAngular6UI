import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'developers.component.html'})
export class DevelopersComponent implements OnInit {

    constructor(private userService: UserService, private httpClient: HttpClient) {
    }

    ngOnInit() {
        
    }
  



 




}