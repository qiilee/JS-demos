/**
 * Created by 15842_000 on 2016/12/1.
 */
btn1.onclick = function () {
    animate(box, {
        "width": 400,
        "height": 440,
        "opacity": 0.3,
        "zIndex": 6,
        "top": 220,
        "left": 220
    }, function () {
        animate(box, {"width": 150, "height": 150}, function () {
            animate(box,{"width":600,"height":600},"123")
        });
    });
};


/**
 *
 * @param tag
 * @param obj
 * @param fn  ������ ���봫�������������㱨�����
 */
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in obj) {
            if (k == "opacity") {
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                tag.style.zIndex = obj[k];
            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader + "px";
            }
            //��⣬��ǰ��������Ƿ񵽴���ָ��λ��
            if (leader != target) {
                //��ֹ�����ʱ��
                flag = false;
            }
        }

        //������Ҫ��֤obj��ÿһ��obj���˶���λ��
        if (flag) {
            clearInterval(tag.timer);
            if(typeof fn == "function"){
                //����
                fn();
            }
        }
    }, 20);
}


function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}






console.log("=============================������ͬ========================================");











btn1.onclick = function () {

    //ִ����һ���˶��Ժ���ִ�еڶ����˶�
    //��ϣ���ڵ�ǰ�˶���Ϻ󵯳�һ������
    animate(box, {
        "width": 400,
        "height": 440,
        "opacity": 0.3,
        "zIndex": 6,
        "top": 220,
        "left": 220
    }, function () {
        //alert("������������");
        //alert("�Ǻǣ�����tan��һ��");
        animate(box, {"width": 150, "height": 150}, function () {
            animate(box,{"width":600,"height":600},"123")
        });
    });
};


/**
 *
 * @param tag
 * @param obj
 * @param fn  ������ ���봫�������������㱨�����
 */
function animate(tag, obj, fn) {
    //��һ�����ں����ڷ����������ݹ���
    //tag = box'
    //obj = {"width": 400,"height": 450,"opacity": 0.3,"zIndex": 6,"top": 220,"left": 220}
    //fn = function () {alert("������������");}  �������ʽ

    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //���������:���赱ǰ��ζ�ʱ���������
        var flag = true;

        //��Ҫͬʱ�޸Ķ������
        //�Զ����е�ÿһ�����Խ��в���
        for (var k in obj) {
            if (k == "opacity") {
                //k - ������ - �ַ�����ʽ - attr
                //obj[k] - ����ֵ - target
                var target = obj[k] * 100;
                //��ȡ���������һ��С��
                var leader = getStyle(tag, k) * 100 || 0;
                //�����˶���ʽ
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //���õ�ʱ��
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                //ֱ�����ò㼶������Ҫ����
                tag.style.zIndex = obj[k];
            } else {
                //��ͨ�ģ�����λ����ʽ
                //k - ������ - �ַ�����ʽ - attr
                //obj[k] - ����ֵ - target
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                //�����˶���ʽ
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //���õ�ʱ��
                tag.style[k] = leader + "px";
            }

            //��⣬��ǰ��������Ƿ񵽴���ָ��λ��
            if (leader != target) {
                //��ֹ�����ʱ��
                flag = false;
            }
        }

        //������Ҫ��֤obj��ÿһ��obj���˶���λ��
        if (flag) {
            clearInterval(tag.timer);
            //������Ҫ��֤�µ��˶��ڵ�ǰ���˶�ִ����Ϻ��ٿ�ʼ
            //�������ʱ���Ժ󣬱�֤��ǰ�˶��Ѿ������
            //animate(box, {"width": 700});
            //alert("������������");
            //�������е�ĳ�ι��ܲ�ȷ��������£����뺯������
            //ֻ�к������ܱ���һ�δ���

            //��Ҫ��fn������Ч�Լ��
            //���Ͻ��ļ�ⷽʽ
            if(typeof fn == "function"){
                //����
                fn();
            }


            //�Լ��ã��������ʹ��
            //ʹ��һ����·����
            //ֻҪ������fn����ʱ��fn���е���
//                fn && fn();
            //���û��undefined
        }
    }, 20);
}


//getStyle(box, "width")
//��ȡ��������ʽ��ֵ
function getStyle(tag, attr) {
//        if (tag.currentStyle) {
//            //����ȷ����Ҫʹ�õ��Ǽ�����ĸ��ʱ��,ʹ���ַ���
//            //����ʹ�õĲ�����ĸ�������ڲ������ֵ����ʱʹ�ñ���
//            return tag.currentStyle[attr];
//        } else {
//            return getComputedStyle(tag, null)[attr];
//        }


    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];


}
