/*!
 * evk_range_extended.js 1.0.0 [2023-01-23]
 * https://github.com/JohnKu2020/evk_range_extended
 *
 * Released under the MIT
 * https://github.com/JohnKu2020/evk_range_extended/blob/main/LICENSE
 */
(function($) {
	$.fn.evkJKrangeExtended = function (options) {
		'use strict';
		return $(this).each(function () {
			var defaults = { text: '', min: 0, max: 10, step: 1, init_val: 0, format: 'int'},
			activeOptions = $.extend(defaults, options),
			self = this,
			element = $(this),
			element_id = element.attr("id"),
			element_label_text = activeOptions.text,
			range_min = activeOptions.min,
			range_max = activeOptions.max,
			range_step = activeOptions.step,
			range_init_val = activeOptions.init_val,
			range_format = activeOptions.format,
			element_class = 'evkre_',
			rangeextended = '',
			ctrl_range,
			ctrl_number,
			carrent_value = range_init_val,
			prev_value,
			initElement = function () {
				rangeextended = '<label for="'+element_class+element_id+'" class="evk_label_range">'+element_label_text+'</label>\
								<input id="'+element_class+element_id+'" type="range" value="'+range_init_val+'" min="'+range_min+'" max="'+range_max+'" step="'+range_step+'">\
								<input class="evk_value_range" id="'+element_class+element_id+'_val" type="number" value="'+range_init_val+'" min="'+range_min+'" max="'+range_max+'" step="'+range_step+'">';
				element.html(rangeextended)
						.attr('data-val',carrent_value)
						.css('cursor', 'pointer');
				ctrl_range = $('#'+element_class+element_id);
				ctrl_number = $('#'+element_class+element_id+'_val');
			},
			validate_input = function (inp, def) {
				var num = $(inp).val().replace(/[^\d.]*/g, '').replace(/([,.])[,.]+/g, '$1').replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1'); if (isNaN(num) || num=='') num=def; inp.value = num; 
			},
			input_onlykeys = function() {
				if (event.keyCode < 48 || event.keyCode > 57) event.returnValue= false;
			},
			input_onlykeys_dot = function() {
				if (event.keyCode >=48 && event.keyCode <= 57 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 45) { event.returnValue= true; } else { event.returnValue= false; }
			},
			fire_change_event = function() {
				element.attr('data-val',carrent_value); if (prev_value != carrent_value) { prev_value = carrent_value; var evt = $.Event('evk_change'); element.trigger(evt, carrent_value); }
			},
			check_value = function(val) {
				var tmp = parseFloat(val) || 0; if (tmp > range_max) tmp = range_max; if (tmp < range_min) tmp = range_min; carrent_value = parseFloat(tmp); return carrent_value;
			}

			initElement();

			element.keypress(function(e) {
				if(e.which == 13) { e.target.value = check_value(e.target.value); ctrl_range.val(carrent_value); fire_change_event(); e.stopPropagation(), e.preventDefault(); return true; }
				if (range_format=='int') input_onlykeys(); if (range_format=='float') input_onlykeys_dot();
			});
			ctrl_number.on('keyup', function(e) {
				e.target.value = check_value(e.target.value);
				ctrl_range.val(carrent_value);
				fire_change_event();
			});
			ctrl_range.on('input', function(e) {
				e.stopPropagation(), e.preventDefault();
				ctrl_number.val(check_value(e.target.value));
				fire_change_event();
			});
			ctrl_number.on('click', function (e) {
				e.stopPropagation(), e.preventDefault();
				var cur = check_value(e.target.value);
				if (cur <= range_max && cur >= range_min) {
					ctrl_range.val(carrent_value);
					fire_change_event();
				}
			});
			element.on('wheel', function(e) {
				e.stopPropagation(), e.preventDefault();
				var delta = e.deltaY || e.originalEvent.deltaY;
				if ( delta < 0){ carrent_value += 1; } else { carrent_value -= 1; }
				ctrl_number.val(check_value(carrent_value));
				ctrl_range.val(carrent_value);
				fire_change_event();
			});

		});
	}
})(jQuery);