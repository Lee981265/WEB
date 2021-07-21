'use strict';

const schedule = require('node-schedule');
const axios = require('axios');
// 制作工具群
// const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxxxxxxxxx';
// 前端
// const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxxxxxxxxxx';
const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxxxxxxxxxxxxxxx';
const fetch = axios.create({
  headers: {
    'content-type': 'application/json'
  },
});
const resData = {
  msgtype: 'text',
  text: {
    mentioned_list: [ '@all' ],
    // content: '亲爱的同事们这一周的工作快结束了，记得写周报哦！',
    content: '小伙子快下班了',
    // mentioned_mobile_list: [ '@all' ],
  },
};

function requestfun() {
  return fetch.post(webhook, resData);
}

const scheduleCronstyle = () => {
  // const time = '0 07 19 * * 5';
  const time = '30 * * * * *';
  schedule.scheduleJob(time, () => {
    requestfun();
  });
};

scheduleCronstyle();
console.log('Start successfully');
