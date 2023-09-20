import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
  alert: boolean = false;



  addRestaurent = new FormGroup({
    Name: new FormControl(''),
    Address: new FormControl(''),
    Mobile: new FormControl(''),
    Email: new FormControl('')
  });

  constructor(private addCompResto: CommonService) { }

  ngOnInit(): void {}

  createResto() {
    // console.log(this.addRestaurent.value);
    this.addCompResto.addRestoList(this.addRestaurent.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurent.reset({});
        
      console.log("Get data from Service", result);

    })
  }

  // close function/ Method
  closeAlert(){
    this.alert = false
  }


}
