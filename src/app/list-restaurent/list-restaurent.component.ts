import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css']
})
export class ListRestaurentComponent implements OnInit{
  // varible declation
  public collection: any;
  route: any;
  
  
  constructor(private commonService : CommonService, route : ActivatedRoute ) {}
  
  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection = result;
      console.log(this.collection) // pura data this.collection me hai 
    })
   }

   deleteResto(id:any){

   }

  //  deleteResto(id:any){
  //   this.commonService.deleteResto(this.router.params['id']).subscribe((id:any)=>{
  //     console.log(id, "data update successfull") 
  //       })
  //   }

  
  // deleteResto(id:any){
  //   this.route.paramMap.subscribe((params:any)=>{
  //     const id = params.get(['id']);
  //     if(id){
  //       console.log(id, "deleted data");
  //     }else{
  //       console.log("error");
  //     }
  //   });
    
  // }
  
   

}
