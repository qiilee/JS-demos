/**
 *
 * @param tag Ҫ��ȡ��ʽ��Ԫ��
 * @param attr  Ҫ��ȡ����ʽ��
 * return {}
 */
//���ڻ�ȡĳ����ǩ��ĳ����ʽ����ֵ
//����λ
//getComputedStyle��һ����׼����������ie�Ͱ汾��֧��
//console.log(getComputedStyle(box, null).width);
//console.log(getComputedStyle(box, null).height);

//ie�Ͱ汾֧�� ��ǩ.currentStyle ���ԣ���ȡ�Ľ��ͬ����һ����ʽ�ļ���(����)
//console.log(box.currentStyle.width);
//console.log(box.currentStyle["width"]);

//�����Ժ���һ
function getStyle(tag, attr) {
    //���֧����һ��
    //box.currentStyle//���������ֵΪundefined
    //getComputedStyle����������֧�֡��൱�ڱ���δ����������
    if (tag.currentStyle) {
        //ie֧��
        return tag.currentStyle[attr];
    } else {
        //��׼����
        //��һ��������Ҫ��ȡ�ı�ǩ���ڶ���������null����false
        return getComputedStyle(tag, null)[attr];
    }
}

//�����Ժ�����
function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}