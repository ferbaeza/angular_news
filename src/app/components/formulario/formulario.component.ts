import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() selectedParams = new EventEmitter<any>() 

  selectedCategory="sports";
  selectedCountry="mx";


  categories:any[]=[
    {value: "general", name: "General"},
    {value: "business", name: "Business"},
    {value: "sports", name: "Sports"},
    {value: "science", name: "Science"},
    {value: "technology", name: "Technology"},
    {value: "entertaiment", name: "Entertaiment"},
  ];
  countries:any[]=[
    {value: "ca", name: "Canada"},
    {value: "fr", name: "Francia"},
    {value: "gb", name: "Reino Unido"},
    {value: "it", name: "Italia"},
    {value: "mx", name: "Mexico"},
    {value: "us", name: "Estados Unidos"},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  findNew() {
    console.log(this.selectedCategory);
    console.log(this.selectedCountry)
    const PARAMS={
      country: this.selectedCountry,
      category: this.selectedCategory,
    }
    this.selectedParams.emit(PARAMS)
  }

}
