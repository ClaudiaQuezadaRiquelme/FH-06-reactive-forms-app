import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {

  private fb = inject(FormBuilder);
  public formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['', Validators.required],
        ['', Validators.required],
      ],
      Validators.minLength(2)
    ),
  });

  newFavoriteGame = this.fb.control(['', Validators.required]);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavoriteGame.invalid) return;
    const newGame = this.newFavoriteGame.value;
    this.favoriteGames.push(this.fb.control([newGame, Validators.required]));
    this.newFavoriteGame.reset();
  }
}
