import { Component, OnInit } from '@angular/core';
import { PrincipalLinks } from "../../constants/constant-links";
@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.sass']
})


export class CustomHeaderComponent implements OnInit{
  PrincipalLinks=PrincipalLinks;
  PrincipalLinksleft: { name: string; link: string; }[] = [];
  PrincipalLinksright: { name: string; link: string; }[] = [];
  active =  PrincipalLinks[0].link
  ngOnInit(): void {
    const half_length = Math.ceil(PrincipalLinks.length / 2);    
    this.PrincipalLinksleft = PrincipalLinks.slice(0,half_length);
    this.PrincipalLinksright = PrincipalLinks.slice(half_length,PrincipalLinks.length);
  }
  isMenuCollapsed = true;
}
