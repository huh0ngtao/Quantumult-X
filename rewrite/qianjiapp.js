/******************************

脚本功能：钱迹解锁终身会员
软件版本：4.0.9
更新时间：2024-01-25
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 钱迹解锁终身会员
^https?:\/\/api\.qianjiapp\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/huh0ngtao/Quantumult-X/main/rewrite/qianjiapp.js

[mitm] 
hostname = api.qianjiapp.com

*******************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.config.userinfo.viptype = 100;
obj.data.config.userinfo.vipstart = 1704117226;
obj.data.config.userinfo.vipend = 4070958912;

body = JSON.stringify(obj);
$done({'body' : body});