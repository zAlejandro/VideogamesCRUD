import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesComponent } from './add-games.component';

describe('AddGamesComponent', () => {
  let component: AddGamesComponent;
  let fixture: ComponentFixture<AddGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGamesComponent]
    });
    fixture = TestBed.createComponent(AddGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
