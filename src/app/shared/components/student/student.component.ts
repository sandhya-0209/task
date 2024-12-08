import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  stdInfo: Array<IStudent> = [
    {
      fname: "Rohini",
      lname: "Joshi",
      email: "rohi@gmail.com",
      contact: 5467809876
    },
    {
      fname: "Vishal",
      lname: "kulkarni",
      email: "vish@gmail.com",
      contact: 6788764523
    },
    {
      fname: "Abhishek",
      lname: "Joshi",
      email: "abhi@gmail.com",
      contact: 6475998390
    },
    {
      fname: "Pragati",
      lname: "Gaikwad",
      email: "pagi@gmail.com",
      contact: 245686904
    }
  ];
  
  
}
