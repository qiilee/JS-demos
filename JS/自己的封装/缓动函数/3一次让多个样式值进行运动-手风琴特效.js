/**
 * Created by 15842_000 on 2016/11/30.
 */
//�º����и��ĵĲ���
//1 ����Ϊһ������
//2 ���ڲ��޸�ֵ��ʱ����Ҫ���ݶ��������õ���ʽ��������
//3 ������ʱ����ʱ����ͬ����Ҫ��ÿ��forin������ȥ����Ƿ�������

//�޸�animate�������޸���������ԣ�datas�Ǵ���һ������

function animate(tag, datas) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in datas) {
            var target = datas[k];
            var leader = parseInt(getStyle(tag, k)) || 0;
            var step = (target - leader ) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            tag.style[k] = leader + "px";
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
        }

    }, 17);
}


console.log("=============================������ͬ========================================");








function animate(tag, datas) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //���������
        //д�ڶ�ʱ���ʼ��λ�á���֤ÿһ�ζ�ʱ�������ж��л��������ʱ��
        var flag = true;

        //��һ����Ҫȡ������Ķ�������е�ÿһ����Ҫ�仯����ʽ
        //ʹ��for in
        for (var k in datas) {
            //k ĳһ�������� - attr
            //datas[k] - �൱��target
            var target = datas[k];
            //�޸�ĳһ����ʽ��ֵ
            var leader = parseInt(getStyle(tag, k)) || 0;
            var step = (target - leader ) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            tag.style[k] = leader + "px";
            //�����ʱ����ʱ�򣬲�����forin�У���Ϊ������ĳ����ʽ�ȵ���ָ����ֵ����������ʽ���ܱ�֤

            //������һ������ֵû�е���ָ��λ�ã��Ͳ������
            if (leader != target) {
                //����flag = false
                flag = false;
            }
        }
        //ȷ�����е���ʽ��������ָ��λ��
        if (flag) {
            clearInterval(tag.timer);
        }

    }, 17);
}

