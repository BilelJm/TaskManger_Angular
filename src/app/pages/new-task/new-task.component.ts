import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../models/task.models';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService,private router:ActivatedRoute,private route:Router) {

   }
   listId:string

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.listId = params['listId']
      console.log(this.listId)
    })
    
  }
  createTask(title:string){
    this.taskService.createTask(title,this.listId).subscribe((newTask:Task)=>{
      this.route.navigate(['../'],{relativeTo:this.router})
    })
    }
}
