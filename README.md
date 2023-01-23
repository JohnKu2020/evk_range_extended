# evk_range_extended
It combines html both range input and number input controls to work as one with Wheel events

## Setup
```
<script type="text/javascript" src="evk_range_extended.js"></script>
<link href="evk_range_extended.css" rel="stylesheet" type="text/css">
```
## Usage
```
<script type="text/javascript">
$(document).ready(function(){

	$('#bar_width').evkJKrangeExtended({text: 'Value', min: 0, max: 100, init_val: 50 });
	$("#bar_width").on('evk_change',function(e, val){ log('Value: '+val); });
  
});

// To set value
function set_re_val(id, val) { $('#'+id).attr('data-val',val); $('#evkre_'+id).val(val); $('#evkre_'+id+'_val').val(val); }

set_re_val('bar_width', 60);
</script>
<div class="row"><div class="col-lg-3"><div id="bar_width"></div></div></div>
```
## Options
```
({text: '', min: 0, max: 10, step: 1, init_val: 0, format: 'int | float'})
```
## How it looks like
![How it looks](https://evk.ru.com/demo/github/evk_range_extended/evk_range_extended.PNG)

## Demo
You can see a [demo and usage here](http://localhost/evk2020/demo/github/evk_range_extended)

## License

(The MIT License)

Copyright (c) 2023 John Ku

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
