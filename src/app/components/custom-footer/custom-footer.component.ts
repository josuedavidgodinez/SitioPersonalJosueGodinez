import { Component, OnInit } from '@angular/core';
import { faGithub,faLinkedin, IconDefinition ,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk ,faSms} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.sass']
})
export class CustomFooterComponent implements OnInit{
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

}


