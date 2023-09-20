<!-- Angular Command :-- -->

------------------------------------------------------------------------------
video #2 => installation Angular + json server
------------------------------------------------------------------------------
video #3 => json server ,make URL, postman testing --> CRUD Operation  
----------------------------------------------------------------------------------------------------------
video #4
npm install bootstrap@5.2.3
CSS:-
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
JS:-
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"
--------------------------------------------------------------
COMPONENTS:
    1.add compo
    2.update compo
    3.list compo
    4.login compo
    5.register compo    
    -----------------------------------------
    #add routing 
--------------------------------------------------------------
COMMANDS:
    ng g c add-restaurent  
    ng g c update-restaurent
    ng g c list-restaurent
    ng g c login
    ng g c register     
            ng g c home  
--------------------------------------------------------------------------------------------------------------
video #5
    6.create Service:
      ng g s services/common 

-------------------------------------------------------------
app-routing.module =>
    import { HttpClientModule } from '@angular/common/http'

    ---------------------------------------

common.service.ts =>
    import { HttpClient } from '@angular/common/http';

    depandency injection, private call HttpClient 
        
        constructor(private _http : HttpClient) { }

    ---------------------------------------------------------

    //Create Methods:
        getRestoList(){ 
            console.log("This Method is works !");
        }
        
    // call list component.ts
    --------------------------------------------------------
list-restaurent.ts =>

import { CommonService } from '../services/common.service';

    public collection: any;

    constructor(private commonService : CommonService) {}

    call method
     ngOnInit():void{
        this.commonService.getRestoList().subscribe((result)=>{
      this.collection = result;
      console.log(this.collection) // pura data this.collection me hai 
    })
    }

-------------------------------------------------------------------
list-restaurents.component.html

    table creation     

-------------------------------------------------------------------------------------------------------------
video #6
    Reactive Form 
    app.module.ts :-
        import { ReactiveFormsModule } from '@angular/forms';
    ---------------------------------------------------
ADD Compone.ts:-

    add import CommonService
import { CommonService } from '../services/common.service';
import { FormControl, FormGroup } from '@angular/forms';

addRestaurent = new FormGroup({

    Name: new FormControl(''),
    Address: new FormControl(''),
    Mobile: new FormControl(''),
    Email: new FormControl('')

  })

constructor(private addResto : CommonService) {}  

  -------------
  createResto(){
    console.log(this.addRestaurent.value);
        this.addCompResto.addResto(this.addRestaurent.value).subscribe((result)=>{
      console.log("Get data from Service", result);
        })
  }

-------------------------------
Add Compo.html :-
add forms --- bootstrap v5.2 
[formGroup]=> arrary me add karna hai , means binding   
(ngSubmit)="createResto()"  => create method()

Reactive form:-

    formControlName="Name"
    formControlName="Address"
    formControlName="Mobile"
    formControlName="Email"
 accept the data in an user and render the data frontend to backend (.ts file)
------------------------------------------
common.service.ts :-
    
  //argumment pass "data:any"
  addResto(data:any){
    return this._http.post(this.baseURL, data)
  }
 ---------------------------------------------------------
 --------------------------------------------------------------------------------------------------------------
 video#7
        SUCCESS ALERT
        1.Add Boostrap Alert
        2.Reset Form
    ----------------------------------
add compo.html
    -- Add Alert box 
    -- *ngIf="alert"

Add compo.ts
    decleare variable
         alert: boolean = false;
    ------------------------------------

    createResto(){
        this.alert = true;
        this.addRestaurent.reset({});
    }
    ------------------------------------

        // close function// Method
    closeAlert(){
    this.alert = false
    }

------------------------------------------------------------------------------------------------
video#8

    edit icon & Trash icon --> cdna
    -------------------------
    add footer globaly 
        app.component.html
    --------------------------
    ADD NEW COMPONENET
        ng g c Home ---> create home page 

------------------------------------------------------------------------------------------------
Video #9
    Edit & Update Data 
list-restaurent.comp.html
        <a routerLink="/update/{{resto.id}}"></a>

app-routing-module.ts:-
    'update/:id;

{ path:'update/:id',component:UpdateRestaurentComponent }        

----------------------------------------------------
update-resto.comp.html
    Copy for Add Compo.html ---> All code and Edit 

    [formGroup]="editRestaurent"

---------------------------------------
update-resto.comp.ts

import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';


     alert : boolean = false;
  editRestaurent = new FormGroup({
      Name: new FormControl(''),
      Address: new FormControl(''),
      Mobile : new FormControl(''),
      Email: new FormControl('')
  })
  
  constructor(private UpdateResto : CommonService){}        


##################################################
using activatedRoute--->
    ActiveRouteGard -> tab use karte hai, jab bhi koi bhi data, id ke behalf pe pura data send karte hai , kisi second component me.

    One Component <======> Anather Component
        data sharing between two component 

    One compo to Another compo id ke beharf pe data send karna hota hai , to ham ActiveRoute ka use karte hai, kyu ki hame Routing ke throught hame pura data lane wale hai, so uske liye firstly ActivateRoute ko use karna hai     
------------------------------------------
update.Compo.ts :-
       import { ActivatedRoute } from '@angular/router';