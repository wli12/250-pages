// 登录与云端同步的配置。
// 留空（null）时，页面不显示“登录”按钮，标记只保存在当前浏览器里。
// 要开启登录：在 Firebase 控制台 → 项目设置 → “你的应用” → Web 应用里复制 firebaseConfig，
// 替换下面的 null。这段配置本来就是公开的，可以放心提交；
// 数据安全靠的是 Firestore 规则和授权域名（见 README）。
//
// window.PIANDAN_FIREBASE = {
//   apiKey: '...',
//   authDomain: 'your-project.firebaseapp.com',
//   projectId: 'your-project',
//   appId: '...',
// };
window.PIANDAN_FIREBASE = null;

// 把标记自动保存到一个私有 GitHub 仓库里的文件（给站长自己用的备份方式）。
// 这里只写仓库位置，不含任何密钥；访问令牌由使用者在页面的“播放源与备份”里填写，只存在他自己的浏览器中。
window.PIANDAN_GITHUB = { repo: 'wli12/250', branch: 'userdata', path: 'marks.json' };
