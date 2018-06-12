/**
 * Created by 15842_000 on 2016/11/30.
 */
function animate(tag, attr, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = parseInt(getStyle(tag, attr)) || 0;
        var step = (target - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        tag.style[attr] = leader + "px";
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}


function getStyle(tag, attr) {
    if (tag.currentStyle) {
        return tag.currentStyle[attr];
    } else {
        return getComputedStyle(tag, null)[attr];
    }
}







console.log("=============================������ͬ========================================");







//�޸�animate�������޸����������
function animate(tag, attr, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //�ĵ�1 - ��ȡĳ�����Եĵ�ǰ״̬
        //���ھ��е�λ����Ҫȡ��
        //parseInt("hehe") => NaN    NaN || 0
        //Ϊ��Ӧ��autoת��ΪNaN�����⣬����ʹ�ö�·��������֤����Ľ�׳��
        var leader = parseInt(getStyle(tag, attr)) || 0;
        //������ʽ��һ�����Ǹ���step��ֵ
        var step = (target - leader ) / 10;
        //����offsetLeft��ȡֵ��ʱ����������룬���ǵ�step����Ƚ�С��������޷��˶�������
        //���ݲ���������������ȡ����ʽ
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //������ʽ
        leader = leader + step;
        //�ĵ�2 - ���ø�ĳһ������
        tag.style[attr] = leader + "px";
        //����Ƿ��ߵ���ָ��λ��
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}
//���ڻ�ȡĳ����ǩ��ĳ����ʽ����ֵ
//����λ
function getStyle(tag, attr) {
    //���֧����һ��
    //box.currentStyle//���������ֵΪundefined
    //getComputedStyle����������֧�֡��൱�ڱ���δ����������
    if (tag.currentStyle) {
        //ie֧��
        return tag.currentStyle[attr];
    } else {
        //��׼����
        return getComputedStyle(tag, null)[attr];
    }
}
