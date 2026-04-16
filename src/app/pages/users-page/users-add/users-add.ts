import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-add',
  imports: [MatIcon, RouterLink],
  templateUrl: './users-add.html',
  styleUrl: './users-add.css',
})
export class UsersAdd {}
