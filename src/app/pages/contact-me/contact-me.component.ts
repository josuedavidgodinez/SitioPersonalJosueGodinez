import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form/contact-form.service';
import {  ContactForm } from "../../models/contactform";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.sass']
})
export class ContactMeComponent {

  constructor(private contactarService: ContactFormService){

  }
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message : new FormControl('')
  });

  contactme(){
    let contactform : ContactForm = new ContactForm(this.contactForm.get('email')?.value!,this.contactForm.get('message')?.value!,this.contactForm.get('name')?.value!);
    this.contactarService.contactMe(contactform);
  }
}
