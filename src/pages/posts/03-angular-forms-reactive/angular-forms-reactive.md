---
path: '/blog/angular-forms-reactive-approach'
date: '2018-05-21T12:34:00+00:00'
title: "Angular Forms: Reactive approach"
thumbnail: ./angular_forms_2.jpg
type: post
icon: ./../../../images/icons/angular.png
category: 'angular'
tags: ['javascript', "angular", "angular forms", "reactive forms"]
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

## Accessing to FormControls from the template.

Sometimes, you could need to access to different FormControls from the template. To do this, you only need to make reference to the form(mainForm) and use the method get with the name of the FormControl and its state (valid or invalid) for example. This is very common to show or hide error messages under the field.

```html

  <form [FormGroup]="mainForm" (ngSubmit)="onSubmit()">
      <input type="text" id="username" formControlName="username">
      <span class="error" *ngIf="mainForm.get('username').invalid && mainForm.get('username').touched">
          Field required
      </span>
  </form>

```

Above we are hiding or showing an error message according to the state of username input. In this case, the only validator makes this field required for this reason this message will be displayed when the field is empty.

To avoid this message would be displayed from the rendering of the form we need to detect if this field has been touched (clicked) by the user

## Grouping Controls

Maybe, the information that user must complete in our forms could be group by sections (personal, skills, studies, previous jobs…). For this reason, Angular provides us a solution to do this nesting a FormGroup into each other in the typeScript file:

```javascript

  this.mainForm = new FormGroup({
      'userData': new FormGroup({
          'username': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male', Validators.required),
  })

```

Besides, we should involve this fields in the HTML template into a container with the tag FormGroupName which should be equal to the name of this formGroup in the typeScript side.

```html

  <form [formGroup]="mainForm" (ngSubmit)="onSubmit()">
        <!-- start Group of FormControls userData -->
        <div formGroupName="userData">
            <div class="form-group">
                  <label for="username">Username</label>
                      <input
                        formControlName="username"
                        type="text"
                        id="username"
                        class="form-control">
                  <label for="email">email</label>
                      <input
                        formControlName="email"
                        type="text"
                        id="email"
                        class="form-control">
            </div>
        </div>
  </form>

```

## Creating custom Validators

For custom validators, we only need to create a function as whichever. This function receives a formControl about which we will make all checks. If the validation fails we can return an object with all the information about what failed and if the validator is passed, we return null or nothing.

Finally, we can add this validator to the formControl declaration. If we have more than one Validator, we can pass an array of validators as the second parameter.

```javascript

  this.mainForm = new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),  // very important detail explained below
   });

  // Custom Validator
  checkForbiddenNames(control: FormControl) {
    if (control.value !== null) {
      if (this.forbiddenUserNames.indexOf(control.value.toLowerCase()) !== -1) {
        return {'userNameForbidden' : true };
      }
    }
      return null;
  }

```

We will need to bind the context because It’s Angular who executes this function and into this function, we have a reference to properties of the component as this.forbiddenUserNames.

## Async Validators

This kind of validators work exactly as custom validators but they return an Observable or Promise to manage async data in its function:

```javascript

 this.mainForm = new FormGroup({
     'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmail.bind(this)),
   }),  
 
  // Custom Async Validator
  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        // we are using [this] then we will have to bind the scope to this function
        if (control.value === this.forbiddenEmail) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    
    return promise;
 
  }

```

Async validators must be passed in the formControl as third parameter

As we did in custom Validators, if this function makes reference to properties under the context of the Component like this.forbiddenEmail, we will bind the context to the validator in the FormControl declaration.

## Status and Value changes

Our form has a valueChanges and statusChanges. These returns an Observable and we can subscribe to it. The valueChanges will notice to us that some value has changed if we are subscribed to it and we can make something when this value changes.

On the other hand, if we are subscribed to statusChanges it will notice to us that the status of the form has changed or if it’s pending to change (this happen in async actions that requires a call to an API).

```javascript

  this.mainForm.statusChanges.subscribe(status => console.log('Main status of the Form', status));
  this.mainForm.valueChanges.subscribe(value => console.log('All values in the Form', value));

```

## Bonus: Creating an Array of FormControls

For creating an Array of formControls from our typeScript file we need to add a property (Hobbies in this case) to our formGroup which will be a new FormArray([])

```javascript

  this.mainForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmail.bind(this)),
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });

```

Besides, we will need a function that allows us adding new FormControls to our formArray.

```javascript

  addHobbyControl(){
      const control = new FormControl(null, Validators.required)
      // next we will push the control to the array
      (<FormArray>this.mainForm.get('hobbies')).push(control);
  }

```

We also need to tell to typeScript that hobbies type is <FormArray>

By default this Array of FormControls is empty. Then we will need a trigger in the HTML template which fires this function and creates the input. It could be a button for example:

```HTML
  
  <!-- Add a formArray -->
  <!-- We need the formArrayName to sync our formArray hobbies with the content this div -->
  <div formArrayName="hobbies">
          <h4>Your Hobbies</h4>
      <!-- Clicking this button we create a new FormControl REQUIRED input to add a new Hobby -->
      <button (click)="addHobby()" class="btn btn-primary" type="button">Add hobby</button>
      <hr/>
      <div class="form-group" *ngFor="let hobbyControl of mainForm.get('hobbies').controls; let i = index">
         <input type="text" class="form-control" [formControlName]="i">
         <span *ngIf="! hobbyControl.valid && hobbyControl.touched" class="help-block">Field required</span>
      </div>
  </div>

```

As we did with the formGroup, formGroupName and formControlName:

Arrays also need to be encapsulated with the tag formArrayName with a property binding to the property hobbies in the typeScript file to sync our formArray with the content in this div

Then we can see a *ngFor which iterates over all formControls in the hobbies FormArray. Each element into hobbies will be a hobbyControl from mainForm.get(‘hobbies).controls
