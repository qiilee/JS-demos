/**
 * Created by 15842_000 on 2016/11/30.
 */

function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = tag.offsetLeft;
        var step = (target - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        tag.style.left = leader + "px";
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}

//��װ��Դ�ڴˣ�
btn1.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var leader = box.offsetLeft;
        var step = (400 - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        box.style.left = leader + "px";
        if (leader == 400) {
            clearInterval(timer);
        }
    }, 17);
};















console.log("=============================������ͬ========================================");





function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //ȡ�����ӵĵ�ǰλ��
        //offsetLeft������ȡֵ��ʱ�����������
        var leader = tag.offsetLeft;
        //������ʽ��һ�����Ǹ���step��ֵ
        var step = (target - leader ) / 10;
        //����offsetLeft��ȡֵ��ʱ����������룬���ǵ�step����Ƚ�С��������޷��˶�������
        //���ݲ���������������ȡ����ʽ
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //������ʽ
        leader = leader + step;
        //���ø�box��leftֵ
        tag.style.left = leader + "px";
        //����Ƿ��ߵ���ָ��λ��
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}

//��װ��Դ�ڴˣ�
btn1.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        //ȡ�����ӵĵ�ǰλ��
        //offsetLeft������ȡֵ��ʱ�����������
        var leader = box.offsetLeft;
        //������ʽ��һ�����Ǹ���step��ֵ
        var step = (400 - leader ) / 10;
        //����offsetLeft��ȡֵ��ʱ����������룬���ǵ�step����Ƚ�С��������޷��˶�������
        //���ݲ���������������ȡ����ʽ
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //������ʽ
        leader = leader + step;
        //���ø�box��leftֵ
        box.style.left = leader + "px";
        //����Ƿ��ߵ���ָ��λ��
        if (leader == 400) {
            clearInterval(timer);
        }
    }, 17);
};