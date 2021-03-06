[返回](./)

## 项目信息

[项目源码链接](https://github.com/JiYangLin/GifCreator) 

[程序下载](https://github.com/JiYangLin/GifCreator/blob/master/GifCreator.7z)

使用C#和python结合开发。
WPF界面，opencvsharp进行视频的解码，imageio进行gif的生成，PythonMagick进行ico生成。


## 使用说明

### 视频处理

![视频处理](/GifCreator/1.png)

::: warning 视频编辑
点击打开视频按钮，可以从本地磁盘选择视频文件进行加载，将视频帧数显示在左侧列表。

在左侧列表中，可以点击选择任意帧进行查看，也可以删除列表中的帧图像。

点击自动播放，则会自动播放左侧列表中的帧数据图像。
:::

::: warning 视频存储
点击转换GIF按钮，可以将左侧列表中的帧图像合成为gif图像，合成前可自定义生成的gif图像尺寸，文件为：视频文件名+-splitImg--Gif.gif

点击拆分图像按钮，可以将左侧列表中的帧图像拆分存储到文件夹，文件夹路径为：视频文件名+--splitImg。
:::

### 图片处理

![图片处理](/GifCreator/2.png)

::: warning 图像数据处理
可以选择一个文件夹，将其中的jpg图像导入到项目列表，点击合成GIF，将文件夹中图像合成为一个gif图像。
:::

::: warning GIF处理
点击修改图像大小按钮，可以选择一个GIF图像，输入要转换的尺寸，将生成缩放尺寸后的图像，图像为：gif图像名+--resize.gif
:::

::: warning ICO处理
点击转换为ICO文件按钮，可以选择一个PNG或者JPG图像，选择要转换的尺寸，将生成缩放尺寸后的图像，图像为：图像名+----result.ico
:::
