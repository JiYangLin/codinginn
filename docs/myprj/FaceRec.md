[返回](./)

## 项目信息

[项目源码链接](https://github.com/JiYangLin/FaceRec) 

[程序下载](https://github.com/JiYangLin/FaceRec/blob/master/FaceRec.7z)

网上的一个opencv人脸识别算法，这里用C#界面，opencvcharp撸的，能够进行人脸训练和识别，当个小玩具还是不错的。


## 人脸检测功能测试

点击人脸检测功能栏中的开始检测按钮，可以直接调用电脑的摄像头进行人脸检测，将识别到的人脸用蓝框标记出来，绿色框标记识别到的眼睛。

![人脸检测](/FaceRec/1.png)

## 人脸训练与识别

### 人脸训练

::: warning 人脸枚举定义
编辑exe同级目录下的facename.txt

比如我这里测试使用了两个人的脸，所以文件内容为两行。
![人脸数据采集](/FaceRec/2.png)

其中jyl对应ID1，wp对应ID2
:::

::: warning 人脸数据采集
点击人脸数据采集功能栏中的开始采集按钮，在弹出的对话框中输入人脸ID，比如输入0，则对应facename.txt中编辑的第一行jyl。

在采集过程中，会实时存储采集的图像到exe同级目录，并在底部状态栏显示当前存储的文件全路径。目录组成为：exe所在目录/Facedata/ID/图像编号.jpg。

![人脸数据采集](/FaceRec/3.png)

点击停止采集，则停止当前类别的人脸数据采集。
:::

### 人脸识别

::: warning 人脸识别
点击人脸识别功能栏中的开始识别按钮，开始人脸识别，程序会用蓝框标记人脸，并显示facename.txt中对应的人脸名以及识别的精度。

![人脸识别](/FaceRec/4.png)
:::
