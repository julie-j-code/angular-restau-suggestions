import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRankingComponent } from './restaurant-ranking.component';

describe('RestaurantRankingComponent', () => {
  let component: RestaurantRankingComponent;
  let fixture: ComponentFixture<RestaurantRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
