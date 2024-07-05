import { Component, Input, Output, EventEmitter} from '@angular/core';

// type User = {
//   id: string,
//   name: string,
//   avatar: string,
// }

// as above, same below. different way of doing the same thing.
// interface is of type object only.

interface User {
  id: string,
  name: string,
  avatar: string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
