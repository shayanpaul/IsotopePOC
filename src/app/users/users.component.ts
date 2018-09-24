import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list: string[];
  grid: any;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.list = ["Shayan", "Manisha", "Kimaya", "Niloy", "Dhruba","Rakas"];
      setTimeout(()=>{
        this.grid = $('.grid').isotope({
          itemSelector: '.element-item',
          getSortData: {
            category: '[data-category]'
          },
          layoutMode: 'fitRows'
        });
      },100);
    },1000)
  }

  ngAfterViewInit(){
  }
  clickme(name){
    this.list.push(name);
    setTimeout(()=>{
      this.grid.isotope('reloadItems')
      this.grid.isotope({ sortBy:  'category'});
    },100)
  }
  remove(index){
    this.list.splice(index, 1);
    setTimeout(()=>{
      this.grid.isotope('layout')
    },100);
  }
  edit(index){
    this.list[index] = 'Anniruddha';
    setTimeout(()=>{
      this.grid.isotope('reloadItems')
      this.grid.isotope({ sortBy:  'category'});
    },100);
  }

}
