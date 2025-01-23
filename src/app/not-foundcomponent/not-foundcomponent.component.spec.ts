import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundcomponentComponent } from './not-foundcomponent.component';

describe('NotFoundcomponentComponent', () => {
  let component: NotFoundcomponentComponent;
  let fixture: ComponentFixture<NotFoundcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
