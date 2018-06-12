(function (window) {

    var arr = [],
        push = arr.push,
        slice = arr.slice;


// ���⹫���ĺ���, ����ԭ���빹�캯����ͬ, ���� constructor Ҳ�Ǹú���
// ��� Itcast ����Ҳ�ǹ��캯��
    function Itcast(selector) {
        return new Itcast.fn.init(selector);
    }

// ԭ�͵�����( ���ĳ�Ա )
    Itcast.fn = Itcast.prototype = {
        constructor: Itcast,
        length: 0,
        init: function (selector) {

            // ���������� 0, '', nulll, undefined
            if (!selector) return this;

            // ���Ԫ��, ���� this
            push.apply(this, Itcast.select(selector));

        }
    };
// ����ԭ��
    Itcast.fn.init.prototype = Itcast.fn;

// �����չ����
    Itcast.extend = Itcast.fn.extend = function (obj) {
        for (var k in obj) {
            this[k] = obj[k];
        }
        return this;
    };


// �Ѿ�д�õĹ��߷���
    Itcast.extend({
        select: function (selector) {
            return document.querySelectorAll(selector);
        },
        isArrayLike: function (obj) {
            if (Object.prototype.toString.call(obj) == '[object Array]') {
                return true;
            }
            var length = 'length' in obj && obj.length;
            return typeof length === 'number' && length >= 0;
        },
        each: function (arr, callback) {
            if (Itcast.isArrayLike(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    if (callback.call(arr[i], i, arr[i]) === false) break;
                }
            } else {
                for (var k in arr) {
                    if (callback.call(arr[k], k, arr[k]) === false) break;
                }
            }
            return arr;
        },
        map: function (arr, callback) {
            var newArr = [], tmp;
            if (Itcast.isArrayLike(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    tmp = callback(arr[i], i);
                    if (tmp != null) {
                        newArr.push(tmp);
                    }
                }
            } else {
                for (var k in arr) {
                    tmp = callback(arr[k], k);
                    if (tmp != null) {
                        newArr.push(tmp);
                    }
                }
            }
            return newArr;
        }
    });

    Itcast.fn.extend({
        each: function (callback) {
            return Itcast.each(this, callback);
        },
        map: function (callback) {
            return Itcast.map(this, callback);
        }
    });


// ��Ӻ��ķ���
    Itcast.fn.extend({
        toArray: function () {
            return slice.call(this);
        },
    });


    window.Itcast = window.I = Itcast;


})(window);

