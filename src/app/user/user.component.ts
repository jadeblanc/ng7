import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  user: Object;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
     this.route.params.subscribe( params => this.user = params.id );
  }

  ngOnInit() {
    this.dataService.getUser(this.user).subscribe(res => {
        this.user = res;
        console.log(this.user);
      }
    );
  }
}
