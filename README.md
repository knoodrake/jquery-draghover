jquery-draghover
================

Jquery-draghover is like jQuery hover, but excute dragenter and dragleave callbacks for matched elements.

Drag and drop is a cool feature in Html5, but it is really a pain when we just want simple dragenter and dragleave callbacks to be fired correctly on the element accross browsers. There are some proposals for the solutions in Stackoverflow, but none of them works for me as I wanted. In the end, I figured out this workaround.



This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.  


## Getting Started

Downloading the file jquery-draghover and include it in your page:
```html
<head>
    ...
    <script src="jquery.js"></script>
    <script src="jquery-draghover.js"></script>
    ...
</head>
```


## Use it
```html
$ele.draghover(function () {
    self.$el.addClass("draghover");
}, function () {
    self.$el.removeClass("draghover");
});
```


License
----

MIT
