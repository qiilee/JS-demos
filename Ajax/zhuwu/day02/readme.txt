01php  html��php��� ���ѵ㣩

02XMLHttpRequest
  01GET:::::::::::
  ����XMLHttpRequest����
  xhr.open(get��Ŀ���ļ������ݵ�����)
  xhr.send(null);
  xhr.onreadystatechange = function(){}
  xhr.readyState==4 && xhr.status==200
  xhr.responseText��÷��ص�����

  02POST::::::::::::
  ����XMLHttpRequest����
  xhr.open(POST��Ŀ���ļ�)
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");          ע��㣡��
  xhr.send(���ݵ�����);
  xhr.onreadystatechange = function(){}
  xhr.readyState==4 && xhr.status==200
  xhr.responseText��÷��ص���

  03/04 ���ַ�����post��ʽ����û����Ƿ����

  05 �Լ���my2��д��һ�飬ע��php�ļ�ת��utf-8��ʽ


03XML
   ��ȡ����ʹ�õ���xhr.responseXML


