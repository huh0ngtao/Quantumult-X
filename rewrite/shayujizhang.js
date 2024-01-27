/******************************

脚本功能：鲨鱼记账解锁会员
软件版本：3.50
更新时间：2024-01-25
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 鲨鱼记账解锁会员
^https?:\/\/api\.shayujizhang\.com\/account\/grant\/detail\/info\/ url script-response-body https://raw.githubusercontent.com/huh0ngtao/Quantumult-X/main/rewrite/shayujizhang.js

[mitm] 
hostname = api.shayujizhang.com

*******************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip.status = 1;
obj.data.vip.days = 999999;

body = JSON.stringify(obj);
$done({'body' : body});