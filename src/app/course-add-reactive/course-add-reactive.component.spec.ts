import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddReactiveComponent } from './course-add-reactive.component';

describe('CourseAddReactiveComponent', () => {
  let component: CourseAddReactiveComponent;
  let fixture: ComponentFixture<CourseAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
