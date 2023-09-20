import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantData } from '../Restaurant.interface';
// import { RestaurantData } from '../Restaurant.interface';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert : boolean = false;
   
  editRestaurent: FormGroup = new FormGroup({
      Name: new FormControl(''),
      Address: new FormControl(''),
      Mobile : new FormControl(''),
      Email: new FormControl('')
  })
  
  constructor(  private UpdateCompResto:CommonService,
                private router:ActivatedRoute ){}
  
  ngOnInit(): void {
    console.log("[id] is here",this.router.snapshot.params['id']);

    this.UpdateCompResto.getCurrentData(this.router.snapshot.params['id'])
    .subscribe((result:RestaurantData ) =>{
      console.log("All data here..")
      console.log( result);

    this.editRestaurent = new FormGroup({
      Name: new FormControl(result['Name']),
      Address: new FormControl(result['Address']),
      Mobile : new FormControl(result['Mobile']),
      Email: new FormControl(result['Email'])
        })
// OR 
    //  this.editRestaurent.setValue({
    //   Name: result.Name ,
    //   Address: result.Address ,
    //   Mobile : result.Mobile ,
    //   Email: result.Email
    //   });

    });
  }

  updateResto(){
    this.UpdateCompResto.updateResto(this.router.snapshot.params['id'],
        this.editRestaurent.value).subscribe((result:any)=>{
      console.log(result, "data update successfull")
      this.alert = true 
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
