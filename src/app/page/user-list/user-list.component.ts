import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.userList$;
  user: User = new User();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    if (
      confirm(`Click 'OK' to verify that you want to delete this user.`)
      )
    this.userService.remove(user);
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
