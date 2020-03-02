[返回](./)

## 项目信息

[项目源码链接](https://github.com/JiYangLin/PackSocket) 

这是我目前为止唯一的原创性稍微高一点的代码了，最早是VC++写的，应用场景就是一个TCP服务器可以接收多个程序的连接，互相之间可以用一个函数直接发送任意大小的数据包。

后来写了C#版、LinuxC版、Java版、Python版，可以在不同程序编码的情况下方便的进行统一的TCP通信管理，避免了程序通信时需要设计通信协议、拆包组包、连接管理等工作。

## 使用说明

以VC++为例，其他语言版本使用方式类似。

发送数据包时由指令、数据、数据长度组成，通过指令可以标志数据包的类别。  
OnRec接收数据时，recvBuf为空，则代表连接断开连接，回调的数据指向一块反复使用的缓冲区，所以我们需要根据回调数据的长度从recvBuf中拿出数据。

### 服务器

1. 继承IServerRecver,实现OnRec接口，客户端发送数据时，数据会回调到该接口，其中mark参数标志了是哪一个连接发来的数据（客户端建立连接时会发送一个字节数字对自己进行标记）。
2. 创建ServerSocket对象。
3. 使用ServerSocket对象的Start函数开启服务，开启服务后，自动监听和管理连接。
4. 使用ServerSocket对象的SendToMarkConn函数向指定客户端发送数据，使用SendToAllConn函数向所有连接的客户端发送数据。

```
#include "TcpPack.hpp"

class Ser :IServerRecver
{
	string revStr;
public:
	virtual void OnRec(ConnMark mark, UINT32 cmd, char* recvBuf, int BufLen)
	{
		revStr.resize(BufLen + 1);
		char* str = &revStr[0];
		memset(str, 0, BufLen + 1);
		memcpy_s(str, BufLen + 1, recvBuf, BufLen);
		cout << str << endl;
	}
	void Run()
	{
		InitWinSocket();
		cout << "======Server=======" << endl;


		if (!m_ServerSocket.Start(1234, this))
		{
			cout << "start Erro" << endl;
			return;
		}

		string str;
		int mark;
		while (1)
		{
			cout << "input client mark:" << endl;
			cin >> mark;

			cout << "input send data:" << endl;
			cin >> str;

			m_ServerSocket.SendToMarkConn(mark, 0, &str[0], str.length());
		}
	}

	ServerSocket m_ServerSocket;
};


int main()
{
	Ser ser;
	ser.Run();
}
```

### 客户端

1. 继承IClientRecver,实现OnRec接口，服务器发送数据时，数据会回调到该接口。
2. 创建ClientSocket对象。
3. 使用ClientSocket对象的Start函数连接服务器，连接时需要传入一个字节数字标记自己是哪个客户端。
4. 使用ClientSocket对象的Send函数向服务器发送数据。

```
class Cl :IClientRecver
{
	string revStr;
public:
	virtual void OnRec(UINT32 cmd, char* recvBuf, int BufLen)
	{
		revStr.resize(BufLen + 1);
		char* str = &revStr[0];
		memset(str, 0, BufLen + 1);
		memcpy_s(str, BufLen + 1, recvBuf, BufLen);
		cout << str << endl;
	}
	void Run()
	{
		InitWinSocket();
		cout << "======client=======" << endl;

		cout << "input connect mark:" << endl;
		int mark = 0;
		cin >> mark;

		if (!m_ClientSocket.Start(mark, "127.0.0.1", 1234, this))
		{
			cout << "Connect Erro" << endl;
			return;
		}
		else
		{
			cout << "Connect suc" << endl;
		}

		string str;
		while (1)
		{
			cin >> str;
			m_ClientSocket.Send(0, &str[0], str.length());
		}
	}

	ClientSocket m_ClientSocket;
};

int main()
{
	Cl cl;
	cl.Run();
}
```