/******************************

脚本功能：Tide Guide潮汐
软件版本：3.45.4
更新时间：2024-01-27
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > Tide Guide潮汐
^https?:\/\/tide-api\.moreless\.io\/v1\/users\/self url script-response-body https://raw.githubusercontent.com/huh0ngtao/Quantumult-X/main/rewrite/tide.js

[mitm] 
hostname = tide-api.moreless.io

*******************************/

var obj = JSON.parse($response.body);
obj.vip = {
    "expired_at" : 4092599349,
    "is_valid" : true,
    "created_at" : 1704038400,
    "sub_cancel_at" : 0,
    "is_lifetime_member" : true,
    "updated_at" : 1704038400,
    "premium_type" : 2
};

$done({body : JSON.stringify(obj)});