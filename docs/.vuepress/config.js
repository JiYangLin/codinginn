module.exports = {
    title: 'CodingInn',
    description: '欢迎光临',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,


    themeConfig: {
        logo:  '/favicon.ico',
        nav: [
          { text: '主页', link: '/' },
          { text: '编程笔记', link: '/note/' },
          { text: '点点滴滴', link: '/alittle/' },
          { text: '我的项目', link: '/myprj/' },
          { text: 'github', link: 'https://github.com/JiYangLin' },
        ],
        sidebar: 'auto'//从二级标题开始提取（第一行内容如果是1级标题会提取）
    }

    
}