import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcourse',
  templateUrl: './viewallcourse.component.html',
  styleUrls: ['./viewallcourse.component.css']
})
export class ViewallcourseComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   status:boolean=false

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.courseData=data
        this.status=true
      }
    )
  }

  courseData:any=[]

  ngOnInit(): void {
  }

}
