import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { UsersAdd } from './users-add';

describe('UsersAdd', () => {
  let component: UsersAdd;
  let fixture: ComponentFixture<UsersAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAdd],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
