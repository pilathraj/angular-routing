import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
    { id:1, name:"CSE" },
    { id:2, name:"ECE" },
    { id:3, name:"EEE" },
    { id:4, name:"IT" },    
  ];
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      let id = parseInt(params['id']);
      this.selectedId = id;
    });
  }
  onSelect(department) {
    //this.router.navigate(['department',department.id]);
    this.router.navigate([department.id],{relativeTo:this.route});
  }
  
  isSelected(department) {
    return this.selectedId === department.id;
  }

}
