/*!
 * jquery-dragehover
 * https://github.com/bingjie2680/jquery-draghover
 *
 * You may use dragehover under the terms of the MIT license. Basically that
 * means you are free to use dragehover as long as this header is left intact.
 * Copyright 2014 Yijie Li
 */

(function($) {
    $.fn.draghover = function (dragenterCallback, dragleaveCallback) {

        // Borrowed from underscorejs, so we don't need to depend on it just to use one method
        function debounce(func, wait, immediate) {
            var timeout, args, context, timestamp, result;

            var later = function () {
                var last = _.now() - timestamp;

                if (last < wait && last > 0) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    }
                }
            };

            return function () {
                context = this;
                args = arguments;
                timestamp = _.now();
                var callNow = immediate && !timeout;
                if (!timeout) timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                }

                return result;
            };
        }

        var _debounce = (_ && _.debounce) || debounce;

        return this.each(function () {

            var isEntered = false,
                $this = $(this);

            $this.on("dragenter", function () {
                if (!isEntered) {
                    isEntered = true;
                    dragenterCallback();
                }
            });

            $this.on("dragover", _debounce(function () {
                isEntered = false;
                dragleaveCallback();
            }, 100));
        });
    };

})(jQuery);

