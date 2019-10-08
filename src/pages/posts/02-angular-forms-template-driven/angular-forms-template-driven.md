---
path: '/angular-forms-template-driven-approach'
date: '2018-05-23T12:34:00+00:00'
title: "Angular Forms: Template Driven approach"
thumbnail: ./angular_forms_1.png
type: post
icon: ./../../../images/icons/angular.png
category: 'angular'
tags: ['javascript', "angular", "angular forms", "template driven approach"]
excerpt: "Template Driven is the most common way to manage forms in Angular when you start to dive into this framework. Although It offers fewer features than the Reactive approximation, sometimes It could be very useful. Mainly for forms which don’t manage huge information."
---

Template Driven is the most common way to manage forms in Angular when you start to dive into this framework. Although It offers fewer features than the Reactive approximation, sometimes It could be very useful. Mainly for forms which don’t manage huge information.

In the Template Driven approach, your form is set in the template an Angular infers the form object from the DOM.

Angular always detects the form tag in the HTML and automatically creates an Object to represent this element.

But Angular doesn’t detect fields into the form and this behavior is for some reasons:

* maybe all inputs, selects or radios, etc must not be sent.
* Maybe we could have elements that only interacts with the UI.
* others.

Then, the information that our form will save on its value must be added by us with the ngModel directive.

```html

  <input name="username" ngModel>

```

## Submitting Form

We submit forms through ngSubmit event binding and normally a function fired through this event makes all work with our form.

But we need first create a reference of this form which will be passed as a parameter into this function.

We create this reference through the ngForm directive associated with a template reference variable (#myForm). Later, the reference it’s the element we pass into the function.

```html

  <form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm">
  
  </form>

```

You didn’t add an NgForm directive.

Angular did. Angular automatically creates and attachesan NgForm directive to the form tag.

The NgForm directive supplements the form element with additional features. It holds the controls you created for the elements with an ngModel directive and name attribute and monitors their properties, including their validity. It also has its own valid property which is true only if every contained control is valid.

The ngForm directive will create a javascript object automatically with all form data, which will be passed to the function in the template and received in the function declaration in the TypeScript file.

```javascript

  onSubmit(form: NgForm){
    //log in the console the form data
    console.log(form)
  }

```

Then, thanks to ngForm we will access easily to all properties created from our form. Some of this properties allow us to interact with UI and know specific details and information about the form.

* Dirty: some values have changed
* Touched: some field was clicked
* Invalid: some validation rule wasn’t passed
* Status: general status of the form. For example, valid.
* Errors: errors returned by validation rules

One pragmatic way to use these properties is to disable the submit button when the form is not valid.

```javascript

  <button [disabled]="!myForm.valid" type="submit"> Submit </button>

```

## Access to Form through ViewChild

We declared a template reference variable in our form tag which was assigned to ngForm. We can access this reference through the ViewChild decorator as well.

```javascript

  @ViewChild('myForm') myForm: NgForm

```

## Validation in the template

We can add to our form fields different validation rules with directives:

* required
* email
* maxlength
* pattern

Thanks to these directives, Angular will add or remove some classes to the form that indicates how is the status at this moment: ng-invalid, ng-touched. Managing this classes we can return a visual feedback to the user to indicate when a value is not correct.

```html

  <input type="email" id="email" class="form-control" name="email" ngModel required email>

```

```css

  input.ng-invalid.ng-touched {
      border: 1px solid red;
  }

```

## Adding Error messages

Sometimes, a border red is not enough to indicate to the user what is wrong with this field. Then we should show the error with a message in a help box.

To do this, we need a reference to this field that allows us to access to this field from any place on this template. We need to add to the input tag a template reference variable assigned to the ngModel directive.

```html

<input type="email" id="email" class="form-control" name="email" ngModel required email #email="ngModel">

```

Why “ngModel”? A directive’s exportAs property tells Angular how to link the reference variable to the directive. You set email to ngModel because the ngModel directive’s exportAs property happens to be ngModel.

Now, we can show o hide a message that indicates if this field is valid or invalid related to the email property that references an ngModel directive for this field.

```html

  <span class="help-block" *ngIf="!email.valid and email.touched">
    Email should be valid
  </span>

```

## Setting default values with bindings

### One way data binding

We could set a default value for inputs through property binding. We can create a property in our ts file:

public response: string = 'pet'
And later we can make reference to this property from the template with a ngModel property binding with []

```html

  <textarea class="form-control" name="response" [ngModel]="response"></textarea>

```

### Two-way data binding

Besides, we could want to make some validation the value introduced in the input. Or show this value in other places automatically. Two-way data binding with ngModel is how we should do this.

```html

  <textarea class="form-control" name="response" [(ngModel)]="response"></textarea>
  
  // we can show the value in other place
  <span>{{ response }}</span>

```

## Grouping Form Controls

Maybe we could want to structure our object of values in the ngForm because we are looking for organizing all values in bigger forms.

To do this we have to wrap our inputs which belong to the same group and add the directive

```html

  <div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" name="username" ngModel required>
        
    <input type="email" id="email" class="form-control" name="email" ngModel required email #email="ngModel">
    <span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid Email</span>
  </div>

```

As we can see above we can create a template reference variable for this ngModelGroup (#userData=”ngModelGroup”) to access to the object representation of this group and add error messages under the group.

```html

  <span *ngIf="!userData.valid && userData.touched">UserData is not valid!!</span>

```

## Patching and setting values to forms

We have two different methods to insert values in a form setting all values for a form or patch only specific fields.

Through the ViewChild decorator, we can create a representation of the form which has a template reference variable. After this, we can do different actions over this form from the typeScript file

Set values in a complete form
In the case of set al values to the complete form, We can pass an object with the same structure that  form values property has:

```javascript

  @ViewChild('myForm') myForm: NgForm 
 
  this.myForm.setValue({
      userData: {
          username:'john',
          email :'johndoe@gmail.com'
      },
      response:'My pet\'s name was Rudolf'
  });

```

## Patch value in a specific form field

By another hand, we can only patch a value for an input or select. To do this, we use the patchValue function from form wrap.

```javascript

  this.myForm.form.patchValue({
      userData: {
        username: 'Jonh'
      }
    });

```

Of course, this actions should be encapsulated in methods and we can execute them wherever we want: ngOnInit or after a user action with an event binding that fires this function, a button clicked for example.

