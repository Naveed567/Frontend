import { Component, OnInit ,TemplateRef } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { Iteacher } from './teacher';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
 
  modalRef?: BsModalRef;
  public ModalTitle = '';
  public selectedvalues = <Iteacher>{};
  public btntitle = '';
  public name = new FormControl('');
  public qualification = new FormControl('');
  public url  = 'teacherschedules/';

  constructor(private modalService: BsModalService, private service:TeacherService) { }
    
  openModal(template: TemplateRef<any> , teacher?:Iteacher) {
    if(teacher){
      this.ModalTitle = "Edit Teacher";
      this.selectedvalues = teacher;
      this.btntitle = "Update";
      this.name.setValue(teacher.name);
      this.qualification.setValue(teacher.qualification);
    }
    else{
      this.ModalTitle = "Add Teacher";
      this.btntitle = "Save";
      this.resetvalues();
    }
    this.modalRef = this.modalService.show(template);
  }

  public teachers = <Iteacher[]>{};
 

  ngOnInit(): void {
    this.getteacherlist();
  } 
  
  getteacherlist(){
     this.service.list()
     .subscribe(response => this.teachers = response);
  }
 

  delete(teacher:Iteacher){
    this.service.delete(teacher).subscribe(_respnse => this.getteacherlist());
  
  }
  save(){
    this.selectedvalues.name = this.name.value;
    this.selectedvalues.qualification = this.qualification.value;
    if(this.btntitle == "Update"){
      this.service.update(this.selectedvalues).subscribe(_response => this.getteacherlist());
      }
      else{
      this.service.add(this.selectedvalues).subscribe(_response => this.getteacherlist());
    }
  }

  resetvalues(){
    this.name.reset();
    this.qualification.reset();
  }

}
