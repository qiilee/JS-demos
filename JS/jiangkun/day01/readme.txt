01  α�������������---��ΪԪ����ӱ߿���ʽ---��������forѭ����װΪeach��map����

02  ��querySelectorAll() ��װ�ɺ����������������ռ�

03.1  function each(arr,statement){
        for(var i = 0;i<arr.length;i++){
           ��new Function �� eval��ʹ�á�
        }
    }


03.2  function each(arr,callback){
        for(var i = 0;i<arr.length;i++){
            ��callback(arr[i],i);��
        }
    }

05 �����Ϸ�װ�ĺ�����Ӧ��

06  ������ʽ���
    function select(selector){
         var obj = document.querySelectorAll(selector);
         obj.each = function(callback){
           each(this,callback)
         };
         return obj;
     }


