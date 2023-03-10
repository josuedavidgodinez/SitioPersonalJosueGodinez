import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone, faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socialmedialinks',
  templateUrl: './socialmedialinks.component.html',
  styleUrls: ['./socialmedialinks.component.sass']
})
export class SocialmedialinksComponent implements OnInit{
  @Input()
   PrimaryColorOrAccent:boolean= true;

  ngOnInit(): void {
   this.socialMediaLinks.push({link:'https://github.com/josuedavidgodinez',icon:faGithub})
   this.socialMediaLinks.push({link:'https://www.linkedin.com/in/josu%C3%A9-david-g-2148061b4/',icon:faLinkedin})
   this.socialMediaLinks.push({link:'tel:+(502) 59238059',icon:faPhone})
   this.socialMediaLinks.push({link:'mailto:godinezjosue@hotmail.com',icon:faMailBulk})
   this.socialMediaLinks.push({link:'sms:+(502) 59238059',icon:faSms})
   this.socialMediaLinks.push({link:'https://wa.me/50259238059',icon:faWhatsapp})

  }
  public socialMediaLinks : {
    link : string,
    icon : IconDefinition
  } [] = []

  public gotolink(link:string){
    window.open(link)
  }

}