import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({  
  template: `<h3> you are in #{{ departmentId }} department </h3> 
       <a (click) = "goPrevious()">Previous</a>
       <a (click) = "goNext()">Next</a>
       <p><button (click)= "goBack()">Back</button></p>
       `,
  
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  /*ngOnInit() {
    this.departmentId = this.route.snapshot.params['id'];
  }*/
  
  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      let id = parseInt(params['id']);
      this.departmentId = id;
    });
  }
  
  goPrevious(){
    let previousId = this.departmentId - 1;
    //this.router.navigate(['\departments', previousId]); /* to remove hardcoded url with RelativeTo */
    this.router.navigate(['../', previousId], {relativeTo:this.route});
  }
  
  goNext(){
    let nextId = this.departmentId + 1;
    //this.router.navigate(['\departments', nextId]); /* to remove hardcoded url with RelativeTo */
    this.router.navigate(['../', nextId], {relativeTo:this.route});
  }
  
  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['\departments', {id:selectedId}]); /* to remove hardcoded url with RelativeTo */
    this.router.navigate(['../', {id:selectedId}],{relativeTo:this.route});
  }
  
  

}
