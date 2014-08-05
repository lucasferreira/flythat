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
