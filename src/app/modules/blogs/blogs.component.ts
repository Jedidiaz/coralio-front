import { datainfoAdminBlogModel } from './../../Models/AdminModels.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  blog!: datainfoAdminBlogModel[]
  constructor( private apiService: ApiService){}
  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs(){
    this.apiService.getBlogs().subscribe({
      next:(res)=> {
        console.log(res)
        this.blog = res.datainfo
      }, error: (err)=> {console.log(err)}
    })
  }
}
