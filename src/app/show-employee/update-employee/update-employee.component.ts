import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../Employee.model';
import {EmpService} from '../emp.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm: FormGroup;
  id: number;
  name: string;
  salary: number;
  dept: string;
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('salaryInput') salaryInputRef: ElementRef;
  @ViewChild('deptInput') deptInputRef: ElementRef;
  @Input() emp: Employee;

  constructor(private employeeService: EmpService) {
    // this.employeeService.changedDetails.subscribe(this.emp => {
    //   this.idInputRef.nativeElement.value=this.emp.id
    // });
  }

  ngOnInit(): void {

  }

  onChanging(emp: Employee) {
    // this.idInputRef.nativeElement.value = this.employee.id;
    // this.nameInputRef.nativeElement.value = this.employee.name;
  }

  onUpdate() {
    const id = this.idInputRef.nativeElement.value;
    const name = this.nameInputRef.nativeElement.value;
    const salary = this.salaryInputRef.nativeElement.value;
    const dept = this.deptInputRef.nativeElement.value;
    //const newEmployee = new Employee(id, name, salary, dept);
  }
}
