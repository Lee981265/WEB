'use strict';

const schedule = require('node-schedule');
const axios = require('axios');
// 制作工具群
// const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=563b155b-988e-408b-893c-d12774f2cb9f';
// 前端
// const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=fe710bc6-ae8e-4687-b51f-49a4560c297e';
const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=ab3be226-85fb-4b05-8e40-44e60e075b39';
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
