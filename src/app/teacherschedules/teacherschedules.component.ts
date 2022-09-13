import { Component, OnInit ,TemplateRef } from '@angular/core';
import { TeacherschedulteService } from '../service/teacherschedulte.service'; 
import { Iteacherschedules } from './teacherschedules'; 
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacherschedules',
  templateUrl: './teacherschedules.component.html',
  styleUrls: ['./teacherschedules.component.css']
})
export class TeacherschedulesComponent implements OnInit {
 
  modalRef?: BsModalRef;
  public ModalTitle = '';
  public selectedvalues = <Iteacherschedules>{};
  public btntitle = '';
  public classs = new FormControl('');
  public subject = new FormControl('');
  public teacher_id = 0;
  
 
  constructor(private route: ActivatedRoute, private modalService: BsModalService, private service:TeacherschedulteService ) { }
  
  openModal(template: TemplateRef<any> , teachersc:Iteacherschedules) {
    
      this.ModalTitle = "Edit Teacher";
      this.selectedvalues = teachersc;
      this.btntitle = "Update";
      this.classs.setValue(teachersc.class);
      this.subject.setValue(teachersc.subject);
     
    this.modalRef = this.modalService.show(template);
  }

  public teachersch = <Iteacherschedules[]>{};

  ngOnInit(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      this.teacher_id  = +id;
      //alert(this.teacher_id);
      this.getteacherschedule(this.teacher_id); 
    
  }

  getteacherschedule(id: number){
    this.service.list(id)
    .subscribe(response => this.teachersch = response);
    console.log(this.teachersch);
    this.resetvalues();
 }

 save(){
  this.selectedvalues.class = this.classs.value;
  this.selectedvalues.subject = this.subject.value;
  this.service.update(this.selectedvalues).subscribe(_response => this.getteacherschedule(this.teacher_id));
    
}

resetvalues(){
  this.classs.reset();
  this.subject.reset();
}

 
}
