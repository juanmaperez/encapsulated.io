---
path: '/blog/angular-forms-reactive-approach'
date: '2018-05-24T12:34:00+00:00'
title: "Angular Forms: Reactive approach"
thumbnail: ./angular_forms_2.jpg
type: post
icon: ./../../../images/icons/angular.png
category: 'angular'
tags: ['javascript', "angular", "angular forms", "template driven approach"]
excerpt: "Reactive forms means create forms programmatically. This practice allows us to develop a lot of features in our form which bring more control over them. These features could be validators, better access to FormControls, create new groups of FormControls or manage the form status or different changes which occur into it."
---

Reactive forms means create forms programmatically. This practice allows us to develop a lot of features in our form which bring more control over them. These features could be validators, better access to FormControls, create new groups of FormControls or manage the form status or different changes which occur into it.

## Reactive Form setup

The first thing we will need to it’s a property mainForm which will be a FormGroup that hold all control we will need to create a form programmatically. It’s important to keep in mind that this Angular feature doesn’t work with the common FormsModule from Angular. In this case, we must import the ReactiveFormsModule from @angular/forms.

```javascript 

  this.mainForm = new FormGroup({
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null,Validators.required),
  })

```

As we said, the first step is to create the property which will control our FormGroup. Then, before rendering our template we need to initialize this form, ngOnInit is a good place to do this. Each field in our form will be a new FormControl that could receive a value (in this case) and follow by angular validators or custom validators. For this example, we have used a validator from Angular for required fields.

Validators keyword (in Validators.required) is an that contains different methods and properties to validate form controls.

* Validators.required
* Validators.email
* Validators.maxLength
* Validators.minLength
* Validators.pattern
* etc…

Sync HTML and Form code
To sync our form in the HTML template with the form created in the typeScript file we need to add to the form tag a FormGroup property binding with the name of our form.

```html 

  <form [FormGroup]="mainForm" (ngSubmit)="onSubmit()">
      <input type="text" id="username" formControlName="username">
      <input type="email" id="email" formControlName="email"> 
  </form>

```

Normally, Angular creates an instance of ngForm when it detects a form tag in out HTML code. Adding FormGroup property binding we are avoiding this default behavior. As we see above we need to associate each input in the form with the FormControl in the typeScript file.

Besides, normally we will make something with this form and we used to manage the value of the form through a function. To do this we will use the ngSubmit directive which allows us to access our form in our typescript file. NgSubmit is the most common way to manage the form submit in Template Driven approach as working with ReactiveForms. OnSubmit() references to the function in our typeScript files which will do whatever with this form.