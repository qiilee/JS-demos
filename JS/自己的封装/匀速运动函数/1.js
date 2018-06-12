/**
 * Created by 15842_000 on 2016/11/30.
 */
function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //ÿ����box��leftֵ����
        //ʹ��offsetLeftȥ��̬�Ļ�ȡbox�ĵ�ǰλ��
        //Leader��ĳһ��Ԫ�صĵ�ǰλ��
        var leader = tag.offsetLeft;
        var step = 7;
        //����leader��target�Ĺ�ϵ����step������
        step = leader > target ? -step : step;

        //��Ϊbox�Ǹ���leader��ֵ�����˶�������������leader�����ֵ��
        //�൱��������box���˶�λ��
        if (Math.abs(leader - target) > Math.abs(step)) {
            // ����Ҫ���õ���λ�� = ���ӵĵ�ǰλ��(��) + ����
            leader = leader + step;
            //���µ�λ�����ø�Ԫ��
            tag.style.left = leader + "px";
        } else {
            //˵����ǰλ�ú�Ŀ��λ��֮��ľ��벻��һ�������˶�һ�ξͻ�Խ���߽磬��ɶ���
            //ֱ���ú����˶���ָ��λ��
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }

    }, 20);
}