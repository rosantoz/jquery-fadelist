# Fade List Items jQuery Plugin

The idea behind the plugin is really simple. Suppose I have an unsorted list and want to show
just a X number of items. Then I fade out this items and fade in the next ones, as it was a slideshow.

# Usage

Just include the plugin in our site:

```<script src="fadelist.jquery.js"></script>``` 
or 
```<script src="fadelist.jquery.min.js"</script>```

**Your HTML code:**
``` HTML
<ul id="gallery">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
</ul>  
```
**And then:**
```$("#gallery").fadelist(); ```

# Options

``` javascript
$("#gallery").fadelist({
    show: 5 // how many items per page
    fade: 15000 // fade speed in miliseconds
});
```
# Demo
Check out 'demo' folder.