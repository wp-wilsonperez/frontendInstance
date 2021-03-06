import { BranchService } from './branch-list.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { ValidationService } from './../new/validation.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss'],
  providers: [ BranchService,ValidationService,UserSessionService ]
})
export class BranchListComponent {
    public data: any;
    public usersData:any;
    public toast:boolean;
    public message:string;
    public userInfo:any;
    public editForm: FormGroup;
    public userId;
    public searchTxt:any;
    public resultData:any;
    public listUserComplete:any;
    public today:any;
    public local:any;
    public error;
    public modalError;
    public roles;

    constructor(private branchService:BranchService,private formBuilder: FormBuilder,public http:Http,public userSession:UserSessionService){
        
        this.local = this.userSession.getUser(); 
       this.loadUsers();
       this.loadRols();
       
       this.editForm= this.formBuilder.group({
            'name': ['', Validators.required],
            'lastName': ['', Validators.required],
            'phone': ['', Validators.required],
            'dateBirthday': [''],
            'idRol':[''],
            'userImg': [''],
            'mail':['',Validators.compose([Validators.required])]
        });
    }
    borrar(id){

        
      this.http.delete('http://localhost:3000/user/delete/'+this.userId+'?access_token='+this.local.token).toPromise().then(result=>{
           let apiResult = result.json();
           console.log(apiResult);
           
           if(apiResult.msg == "OK"){
               this.toast = true;
               this.message ="Usuario Borrado";
               this.usersData = apiResult.update;
           }else{
                this.error = true;
               this.message ="No tiene privilegios para borrar usuarios";
            

           }
           
       })
       
    } 
    loadUsers(){
        this.branchService.userList().then(result=>{
                    this.usersData = result.users;
                    this.listUserComplete = result.users;
                    console.log('Users from Api: ',this.usersData);
                    
                    
        })

    }
    userDetail(user){
            var today:any = new Date();
            var dd:any = today.getDate();
            var mm:any = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if(dd<10){
                    dd='0'+dd
                } 
                if(mm<10){
                    mm='0'+mm
                } 

            today = yyyy+'-'+mm+'-'+dd;
            this.today  = today;
            console.log(today);
            

        this.userId = user._id;
        console.log(this.userId);
        console.log(user);
        
        this.editForm.setValue({name: user.name,lastName: user.lastName,cedula:user.cedula ,phone: user.phone,dateBirthday: user.dateBirthday,mail:user.mail,userImg:user.userImg,idRol : user.idRol});
        
        
        
    }
    editUser(){
            
            
            this.editForm.value.Enabled = 1;
            console.log(this.editForm.value)
            console.log(this.userId);
            this.http.post('http://localhost:3000/user/edit/'+this.userId+"?access_token="+this.local.token,this.editForm.value).toPromise().then(result=>{
                let apiResult = result.json(); 

                if(apiResult.msg == "OK"){
                        this.usersData = apiResult.update;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar usuario"
                }

                
          
                 
            })
            
    }
    getItems(event:any){
            let search = this.searchTxt;
            let compleList = this.listUserComplete;
            console.log(search);
            
            let q = search.toLowerCase();
            this.resultData = compleList.filter(result=>{
                if(result.name.toLowerCase().indexOf(q) > -1){
                        return true
                  }
            })

            this.usersData = this.resultData;

            this.searchTxt == ''?this.usersData = this.listUserComplete:null;

            
    }

    idAssign(id){
            this.userId = id;
            console.log(this.userId);
            
    }

     loadRols(){
       
        this.http.get('http://localhost:3000/role/list?access_token='+this.local.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.roles = apiResult.roles;
                
        })
    }
     
}

