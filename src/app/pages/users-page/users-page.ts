import { Component } from '@angular/core';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-users-page',
  imports: [MatFormField, MatLabel, MatInput, MatButton],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {}
