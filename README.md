jquery-draghover
================

Jquery-draghover is like jQuery hover, but excute dragenter and dragleave callbacks for matched elements.

Drag and drop is a cool feature in HTML5, but it is really a pain([drag and drop disaster][1]) when we just want simple dragenter and dragleave callbacks to be fired correctly on the element accross browsers. There are some proposals to the solution in Stackoverflow, but none of them works for me as I wanted. In the end, I figured out this workaround.



## Getting Started

Download the file jquery-draghover and include it in your page:
```html
<html>
<head>
    ...
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="jquery-draghover.js"></script>
    ...
</head>

<body>
    <div class="droppable"></div>
</body>

</html>
```


## Use it
```js
var $ele = $(".droppable");

$ele.draghover(function () {
    // do staff when drag enters this element
}, function () {
    // do staff when drag leaves this element
});
```


License
----

MIT


[1]:http://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html
