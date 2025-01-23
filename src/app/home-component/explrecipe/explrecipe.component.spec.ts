import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplrecipeComponent } from './explrecipe.component';

describe('ExplrecipeComponent', () => {
  let component: ExplrecipeComponent;
  let fixture: ComponentFixture<ExplrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplrecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
