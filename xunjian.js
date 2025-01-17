// xunjian.js

// 拆分 GitHub URL 为多个部分，每个部分包含一些代码
const part1 = 'https://';
const part2 = 'raw.';
const part3 = 'github.';
const part4 = 'com/';
const part5 = 'ltt203/';
const part6 = 'xunjian/';
const part7 = 'main/';
const part8 = 'content.js';

// 逐步拼接完整的 GitHub URL
const fullUrl = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;

// 输出完整的 URL 以验证
console.log('完整的 GitHub URL:', fullUrl);

// 使用 fetch 请求这个 URL
function loadGitHubScript() {
  fetch(fullUrl)
    .then(response => response.text())
    .then(script => {
      console.log("正在执行从GitHub加载的脚本...");
      // 在网页中动态执行从 GitHub 获取的脚本
      eval(script); // 注意：eval 的使用要非常小心，确保加载的脚本是可信的
    })
    .catch(error => {
      console.error('加载脚本失败:', error);
    });
}
