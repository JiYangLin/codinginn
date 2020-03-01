var fs = require('fs');
var path = require('path');


/*
=====file
文件前增加内容：

    [返回](./)
    
    文件原始内容

*/

/*
=====dir
新增README.md，文件内容：

   [返回](../)
   
   # 文件夹名称
   
   ::: tip 文件列表
   [page1](./文件1.md)
   
   [page2](./文件2.md)
   :::
   
   ::: warning 目录列表
   [dir](./目录1/)
   :::

*/

function GenReadMe(dirpath,dirname){
    console.log("正在处理:" + dirpath)
    let data = '[返回](../)\n\n# ' + dirname + '\n\n'
    fileArray = []
    dirArray = []
    files = fs.readdirSync(dirpath)
    files.forEach((filename)=>{
        var filedir = path.join(dirpath, filename);
        var stats = fs.statSync(filedir)
        if(stats.isFile()){
            fileArray.push(filename)
        }
        if(stats.isDirectory()){
            dirArray.push(filename)
        }        
    });

    if(fileArray.length > 0)
    {
        data += "::: tip 文件列表\n"
        for(var i = 0 ; i < fileArray.length;++i)
        {
            data += "[" + fileArray[i] + "](./" + fileArray[i] +")\n\n"
        }
        data += ":::\n\n"
    }

    if(dirArray.length > 0)
    {
        data += "::: warning 目录列表\n"
        for(var i = 0 ; i < dirArray.length;++i)
        {
            data += "[" + dirArray[i] + "](./" + dirArray[i] +"/)\n\n"
        }
        data += ":::"
    }

    fs.writeFileSync(dirpath + '\\README.md',data);
}
function ModifyMd(pathname)
{
    if(pathname.indexOf("README.md") >= 0) return

    console.log("正在处理:" + pathname)
    data = fs.readFileSync(pathname, 'utf-8');
    fs.writeFileSync(pathname, "[返回](./)\n\n" + data);
}
function GenDoc(dirpath,dirname){
    GenReadMe(dirpath,dirname)
    files = fs.readdirSync(dirpath)
    files.forEach((filename)=>{ 
        var filedir = path.join(dirpath, filename);
        var stats = fs.statSync(filedir)
        if(stats.isFile()){
            ModifyMd(filedir)
        }
        if(stats.isDirectory()){
            GenDoc(filedir,filename)
        }        
    });
}


GenDoc("D:\\note","note")
console.log("=====处理完成=====")