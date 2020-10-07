import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarPeliculasComponent } from './rentar-peliculas.component';

describe('RentarPeliculasComponent', () => {
  let component: RentarPeliculasComponent;
  let fixture: ComponentFixture<RentarPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentarPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
