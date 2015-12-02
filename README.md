Meteor-sweetalert
=================

An awesome replacement for JavaScript's alert.

![A success modal](https://raw.github.com/t4t5/sweetalert/master/sweetalert.gif)

[See it in action!](http://t4t5.github.io/sweetalert)

[Learn how to use it!](https://www.ludu.co/lesson/how-to-use-sweetalert)

Install
--------

`meteor add kit:sweetalert`

Examples
--------

The most basic message:

```javascript
swal("Hello world!");
```

A message signaling an error:

```javascript
swal("Oops...", "Something went wrong!", "error");
```

A warning message, with a function attached to the "Confirm"-button:

```javascript
swal({
  title: "Are you sure?",
  text: "You will not be able to recover this imaginary file!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  closeOnConfirm: false,
  html: false
}, function(){
  swal("Deleted!",
  "Your imaginary file has been deleted.",
  "success");
});
```

A prompt modal where the user's input is logged:

```javascript
swal({
  title: "An input!",
  text: 'Write something interesting:',
  type: 'input',
  showCancelButton: true,
  closeOnConfirm: false,
  animation: "slide-from-top"
}, function(inputValue){
  console.log("You wrote", inputValue);
});
```

Ajax request example:

```javascript
swal({
  title: 'Ajax request example',
  text: 'Submit to run ajax request',
  type: 'info',
  showCancelButton: true,
  closeOnConfirm: false,
  disableButtonsOnConfirm: true,
  confirmLoadingButtonColor: '#DD6B55'
}, function(inputValue){
  setTimeout(function() {
    swal('Ajax request finished!');
  }, 2000);
});
```

[View more examples](http://t4t5.github.io/sweetalert)

For full documentation see the [SweetAlert README](https://github.com/t4t5/sweetalert).

License
-------

MIT
