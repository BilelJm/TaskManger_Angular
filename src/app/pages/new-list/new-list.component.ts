import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscriber } from 'rxjs';
import { List } from 'src/app/models/list.models';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService,private router:Router) { }

  ngOnInit(): void {
  }
  createList(title:string) {
    this.taskService.createList(title).subscribe((list: List)=> {
      this.router.navigate(['lists',list._id])

      console.log(list);
    });
  }
}
