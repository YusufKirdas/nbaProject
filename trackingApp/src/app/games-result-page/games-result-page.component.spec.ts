import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesResultPageComponent } from './games-result-page.component';

describe('GamesResultPageComponent', () => {
  let component: GamesResultPageComponent;
  let fixture: ComponentFixture<GamesResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesResultPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
