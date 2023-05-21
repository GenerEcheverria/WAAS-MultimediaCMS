import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  protected name!: string;
  protected photo!: string;

  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
      this.getUserInfo();
      
  }

  private getUserInfo(){
    this.authService.me().subscribe(data => {
      this.name = data.name;
      this.photo = data.photo;
      const img = new Image();
      img.src = this.photo;
      img.onerror = () => {
        this.photo = "../../../assets/images/default-user.png"
      }
    })
  }
}
