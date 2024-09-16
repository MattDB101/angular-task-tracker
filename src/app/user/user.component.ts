import { Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component"; // Import "User" type.

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CardComponent],
})

export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() emitUserSelected = new EventEmitter<string>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.emitUserSelected.emit(this.user.id);
  }
}
