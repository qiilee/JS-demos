/**
 * Created by 15842_000 on 2016/11/21.
 */
/**
 * ��װ��һ����ñ�ǩ�ı����ݵĺ���
 * @param element
 * @returns {*}
 */
function getText(element) {
    if (typeof element.innerText == "string") {
        return element.innerText;
    } else {
        return element.innerText;
    }
}
/**
 * ��װ��һ�����ñ�ǩ���ݵĺ���
 * @param element
 * @param value
 */
function setText(element, value) {
    if (typeof  element.innerText == "string") {
        element.innerText = value;
    } else {
        element.innerText = value;
    }
}