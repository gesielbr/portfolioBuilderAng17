import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  subbimited: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }

  submit() {
    this.subbimited = true;
    this.showHeading = false;
    this.printQualificationInfo();
  }

  edit() {
    this.subbimited = false;
  }

  printQualificationInfo() {
    const qualificationType = Array.isArray(this.qualification)
      ? 'array'
      : typeof this.qualification;
    const itemCount = this.qualification.length;

    console.log(
      `A propriedade qualification é do tipo ${qualificationType}, e possui ${itemCount} itens.`
    );

    this.qualification.forEach((item, index) => {
      const itemType = typeof item;
      console.log(
        `O item ${
          index + 1
        } é do tipo ${itemType}, e possui as seguintes propriedades e valores:`
      );

      // Obter as propriedades dinamicamente
      const properties = Object.keys(item) as (keyof typeof item)[];

      properties.forEach((prop) => {
        console.log(`  ${prop}: ${item[prop]}`);
      });
    });
  }
}
