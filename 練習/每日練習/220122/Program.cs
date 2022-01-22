// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");





string firstMsg = "Hello world!!";
System.Console.WriteLine(firstMsg);
string msg2 = "This is C#(C sharp)";

//Write與WriteLine的差別在於會不會自動換行 類似css的inline / block 差別
System.Console.Write($"msg2 is {msg2}");
bool msg3 = true;
bool msg3_1 = false;

System.Console.WriteLine($"\nmsg3+msg3_1 is {msg3} {msg3_1} ");
var msg4 = "HI! 今天是1/22 我在學C#";
System.Console.WriteLine(msg4);
msg4 = "今天可能不碰JavaScript";
System.Console.WriteLine(msg4);
System.Console.WriteLine(msg4.ToUpper());
System.Console.WriteLine(msg4.ToLower());

int msg5 = 5;
System.Console.WriteLine("msg5:"+msg5+"  msg5加msg5:"+(msg5+msg5)+" 如果沒括號包起來會是: "+msg5+msg5);
// double的位置只支援小數點後15位數
double msg6 = 6.678901234567890123456789;
double msg6_1 = 6.7890123456789012;
System.Console.WriteLine("msg6:"+msg6+"\n"+"msg6:"+msg6_1);
// float的位置只支援小數點後7位數
float msg7_1 = 7.7890123456789f;
float msg7_2 = 8.8901234F;

System.Console.WriteLine($"msg7_1:{msg7_1}   msg7_2:{msg7_2}  加起來是{msg7_1+msg7_2}" +"  msg7_2的type:"+ msg7_2.GetType());

char msg8 = '\u0061';
string msg8_1 = "\u0061";
string msg8_2 = "\\u0061";
System.Console.WriteLine($"{msg8} msg8的type:{msg8.GetType()} {msg8_1} msg8_1的type:{msg8_1.GetType()}");
System.Console.WriteLine($"msg8_2:{msg8_2}   msg8_1 == msg8_2:{msg8_1 == msg8_2}  msg8_2 == \\u0061:{msg8_2 == "\\u0061"}");



string msg9 = "我是msg9，這是一段msg9訊息";
// 變數.Contains("檢查內容") 檢查變數內是否含有符合的訊息 變數應為string字串
System.Console.WriteLine(msg9.Contains("msg9"));
System.Console.WriteLine(msg9.Contains("msg8"));
System.Console.WriteLine($"msg9長度:{msg9.Length} msg9第[7]個:{msg9[7]}");
// IndexOf 與JS中的使用方式一樣 下條件檢查是否有符合的值 有回傳索引值沒有回傳-1
System.Console.WriteLine($"IndexOf(\"訊\"):{msg9.IndexOf("訊")}  IndexOf(\"電\"):{msg9.IndexOf("電")}");

// Pow次方 Sqrt開根號
System.Console.WriteLine("Pow:"+Math.Pow(9,3) + "   " + "Sqrt:"+Math.Sqrt(49));







msg4 = "最後訊息 - 好吧，我還是稍微碰一下JS好了";
System.Console.WriteLine(msg4);

// visual studio - console 
// System.Console.WriteLine("\n\n輸入任意鍵繼續執行...");
// System.Console.ReadKey();
