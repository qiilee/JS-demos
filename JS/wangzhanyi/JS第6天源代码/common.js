/**
 * Created by Administrator on 2016/11/21.
 */
/**
 * ��װ��һ����ñ�ǩ���ݵĺ���
 * @param element
 * @returns {*}
 */
function getText(element){
//        var str = element.innerText;
    if(typeof element.innerText =="string"){ // һ����boolean���͵�ֵ�����ǹ�ϵ���ʽ�����߼����ʽ  ���if��С��������ŵ����������������͵Ļ������Ƚ���������������ת��Ϊ��Ӧ��boolean���͵�ֵ���ٽ����ж�   Boolean()
        return element.innerText; //IE8��֮ǰ�������֧�ֵķ�ʽ
    }else {
        return element.textContent; //�Ͱ汾�Ļ�������֧�ֵķ�ʽ
    }
}

/**
 * ��װ��һ�����ñ�ǩ���ݵĺ���
 * @param element
 * @param value
 */
function setText(element,value){
    // �������    ���ǿ���ǰ���������֧�ִ˶�������Ի��Ƿ���
    if(typeof element.innerText =="string"){ // IE8��֮ǰ�������֧�ֵķ�ʽ
        element.innerText = value;
    }else { // ���뵽������ǵͰ汾�Ļ�������֧�ֵķ�ʽ
        element.textContent = value;
    }
}