import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  protected name!: string;

  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
      this.getUserInfo();
  }

  private getUserInfo(){
    this.authService.me().subscribe(data => {
      this.name = data.name;
    })
  }
}
