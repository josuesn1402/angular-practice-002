import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'pa-course-add-reactive',
  templateUrl: './course-add-reactive.component.html',
  styleUrls: ['./course-add-reactive.component.scss'],
})
export class CourseAddReactiveComponent implements OnInit {
  courseAddForm!: FormGroup;
  priceFormControl: FormControl = new FormControl(null, [
    Validators.required,
    this.minPrice(10),
  ]);

  ngOnInit() {
    this.courseAddForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      price: this.priceFormControl,
      url: new FormControl(null, Validators.required),
    });
    // this.courseAddForm.statusChanges.subscribe((value) => console.log(value));
    this.priceFormControl.valueChanges.subscribe((value) => console.log(value));
    this.priceFormControl.statusChanges.subscribe((status) =>
      console.log(status)
    );
  }

  onSubmit() {
    console.log('Submit', this.courseAddForm);
  }

  get price() {
    return this.courseAddForm.get('price');
  }

  minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== undefined && control.value <= minPrice) {
        return {
          minPrice: true,
        };
      } else {
        return null;
      }
    };
  }
}
