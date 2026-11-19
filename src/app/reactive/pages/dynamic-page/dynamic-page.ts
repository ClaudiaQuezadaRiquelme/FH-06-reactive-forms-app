import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {}
