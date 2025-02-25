import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getData(); // Make sure this is set correctly
  }
}

