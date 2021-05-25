import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'books-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInValid(name: string): boolean {
    const control = this.bookForm.get(name);
    return !!control && control.touched && control.invalid;
  }

  hasError(name: string, code: string): boolean {
    const control = this.bookForm.get(name);
    return !!control && control.touched && control.hasError(code);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    }

    // Gruppenarbeit!
    // 1. Erzeuge einen EventEmitter mit dem Namen `create` und einem Payload vom Typ Book
    // 2. Emittiere das Event mit dem neuen Buch
    // 3. Subscribe dich auf das Ereignis im Dashboard
    // 4. Füge das Buch dem Array hinzu (Achtung: Immutability beachten)

    this.bookForm.reset();
  }
}
