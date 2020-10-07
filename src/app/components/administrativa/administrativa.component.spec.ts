import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativaComponent } from './administrativa.component';

describe('AdministrativaComponent', () => {
  let component: AdministrativaComponent;
  let fixture: ComponentFixture<AdministrativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
