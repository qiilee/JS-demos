/**
 * Created by Administrator on 2016/11/21.
 */
var live = document.getElementById("mrt-live");
var  $is = live.getElementsByTagName("i");
// ѭ������ÿһ��i��ǩ �����ö�Ӧ�ı���ͼƬ��λ��
var num = 0;
for(var i=0;i<$is.length;i++){
    $is[i].style.backgroundPositionX = 0;
    $is[i].style.backgroundPositionY = num+"px";
    num-=25;
}