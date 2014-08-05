# flythat - modal ~ flyover ~ popup ~ jQuery plugin

This is a helpful jQuery plugin to help create modals, flyovers or simple-popups.

The main job of fly that is help with the basic logic of centering, floating, fill backdrop/modal overlay, control the disposition, through explicit javascript or HTML5 data-* attributes.

No stylish CSS included or required, you can do your own modal design.


# Basic Usage

First, but not required, you can attach the basic stylesheet file to your page:
```html
<link rel="stylesheet" href="flythat/dist/jquery.flythat.css" /> <!-- Core basic -->
```

You can attach your own style to improve your popup/modal layout.

Now you can load the FlyThat javascript plugin file (jQuery required):
```html
<script src="flythat/dist/jquery.flythat.min.js"></script>
```

Every modal container with css class "flythat" will automatically instance a FlyThat plugin object.

Follow the basic syntax:
```html
<div class="flythat" id="simple-modal">
    <a href="#close" class="close flythat-close">&times;</a>
    <div class="modal-content">
        <p>Lorem ipsum content.</p>
    </div>
</div>
```

As you can see, the class "close" in HTML element (anchor or button, for instance) trigger the close event and hide actual opened modal.

If you need a modal that automatic open with page load you can use the "autoOpen" attribute:
```html
<div class="flythat" id="simple-modal" data-autoOpen="true">
    <a href="#close" class="close flythat-close">&times;</a>
    <div class="modal-content">
        <p>Lorem ipsum content.</p>
    </div>
</div>
```

By the way if you want to open your modal by a clicking of button you can attach the attribute "data-flythat='#your-modal-id'":
```html
<a href="#" data-flythat="#simple-modal">Click here</a>
```

## Complete data-* attributes options

```html
<div class="flythat"
    data-position="center"
    data-autoOpen="false"
    data-autoClose="false"
    data-width="false"
    data-height="false"
    data-fadeIn='normal'
    data-fadeOut='normal'
    data-closeClass='close'
    data-closeEsc="true"
    data-hideOnMobile="false"
    data-backdrop='close'
    data-backdropClass="false"
    data-backdropColor='#333333'
    data-backdropColorRGBA='rgba(0, 0, 0, 0.75)'
    >
    <!-- modal content goes here -->
</div>
```

# Javascript usage

If you don't want to use the automatic class "flythat" in your modal container, you are free to manually instance the flythat plugin:
```html
<script>
$("#simple-modal").flythat({
    position: "center", // left, right, left-bottom, right-bottom, center, [x, y] or a function
    autoOpen: false, // set true for auto open with page load
    autoClose: false, // set milliseconds (number) to auto close modal after X milisencods
    width: false, // force a width for automatic position calc
    height: false, // force a height for automatic position calc
    fadeIn: 'normal', // normal, fast, slow, milliseconds (number) or false
    fadeOut: 'normal', // normal, fast, slow, milliseconds (number) or false
    closeClass: 'close', // if you need change the close trigger class
    closeEsc: true, // allow automatic modal hiding by ESC key
    hideOnMobile: false, // set true if you don't want to use flythat in mobile devices
    backdrop: 'close', // false, true or 'close' - to close on backdrop/overlay click
    backdropClass: false, // custom aditional class for backgrop/overlay
    backdropColor: '#333333', // base color for old browsers
    backdropColorRGBA: 'rgba(0, 0, 0, 0.75)' // rgba colors for modern browsers with alpha channel
});
</script>
```

## How to show or hide

If you need to manually show or hide your modal:
```html
<script>
$("#simple-modal").flythat({
    .......
});

$("#my-button").on('click', function(event) {
    event.preventDefault();

    $("#simple-modal").flythat("show"); // show, hide or toggle
});
</script>
```

## Javascript Events

For monitoring the events of modal:
```html
<script>
$("#simple-modal").flythat({
    .......
});

$("#simple-modal").on('show.flythat', function(event, el, instance) {
    // do something when modal opens
});
$("#simple-modal").on('hide.flythat', function(event, el, instance) {
    // do something when modal closes
});
</script>
```

# Demos

There are a lot of exemples in __demos__ folder.
