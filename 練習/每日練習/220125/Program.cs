using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using methods;


namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.OutputEncoding = System.Text.Encoding.UTF8;


            #region test1 

            //Console.Write("請輸入姓名: ");
            //var name = Console.ReadLine();


            //var account = new BankAccount(name,1000);
            //Console.WriteLine($"帳戶編號: {account.Number} 擁有人: {account.Owner} 剩餘金額: {account.Balance} ");
            //account.MakeWithdrawal(-500, DateTime.Now, "支出房租500元");
            //Console.WriteLine("支出房租500元，剩餘金額: " + account.Balance);
            //account.MakeDeposit(100, DateTime.Now, "朋友還我錢");
            //Console.WriteLine("朋友還我錢，剩餘金額: " + account.Balance);


            //Console.WriteLine($"帳戶編號: {account.Number} 擁有人: {account.Owner} 剩餘金額: {account.Balance} ");

            #endregion



            int n1 = 5;
            double n2 = 3.14159;
            double n3 = (int)6.6666666666;
            //自動轉換 5 => 5.0
            Console.WriteLine(n1 + n2 + n3);
            int n4 = n1 + (int)n2 + (int)n3;
            Console.WriteLine($"n4: {n4}");

            string v5 = "2022/01/25";
            DateTime v5_time = Convert.ToDateTime(v5);
            Console.WriteLine("v5:"+v5);
            Console.WriteLine("v5_time:"+v5_time);
            Console.WriteLine("\nnow_time:"+DateTime.Now);


            string v6 = "C:\\Users\\User\\source\\repos\\ConsoleApp1";
            string v6_1 = @"C:\Users\User\source\repos\ConsoleApp1";
            Console.WriteLine($"v6: {v6}, v6_1: {v6_1}");
            Console.WriteLine("v6.Length: "+ v6.Length+"   "+ "v6_1.Length: "+ v6_1.Length);


            int v7 = 5;
            int v7_1 = v7--;
            v7 = 5;
            int v7_2 = --v7;
            v7 = 5;
            int v7_3 = v7++;
            v7 = 5;
            int v7_4 = ++v7;
            Console.WriteLine(v7_1); //5
            Console.WriteLine(v7_2); //4
            Console.WriteLine(v7_3); //5
            Console.WriteLine(v7_4); //6

            //https://ithelp.ithome.com.tw/articles/10214404
            //位元運算子 移位運算子 寫程式寫到現在沒用過


            string v8 = null;
            string v8_1 = "1.2345";
            //差別在於 Convert.ToInt32()會將null轉為0
            Console.WriteLine(Convert.ToInt32(v8));
            //int.Parse()遇到null時會拋出ArgumentNullException錯誤 並且停止編譯
            //Console.WriteLine(int.Parse(v8));
            //遇到小數點時會拋出FormatException 錯誤並停止編譯
            //Console.WriteLine(int.Parse(v8_1));
            Console.WriteLine(double.Parse(v8_1));

            //Console.Write("輸入第一個數字:");
            //int v9 = Convert.ToInt32(Console.ReadLine());
            //int v9_1 = Convert.ToInt32(Console.ReadLine());
            //Console.Write("輸入第二個數字:");
            //Console.WriteLine($"第一個數字:{v9} 第二個數字:{v9_1} 最終:{(v9 + v9_1) / 2}");


            double v10 = 3.14159;
            Console.WriteLine(Math.Truncate(v10));
            Console.WriteLine(Math.Truncate(3.999));

            //奇進偶捨 如果小數點為.5 後方沒有其他小數點則判斷個位數是否為偶數 偶數則捨去基數則進位
            Console.WriteLine("ToInt32奇進偶捨:");
            Console.WriteLine("4.5:"+Convert.ToInt32(+4.5));
            Console.WriteLine("4.501:" + Convert.ToInt32(4.501));
            Console.WriteLine("6.4:" + Convert.ToInt32(7.499999));
            Console.WriteLine("6.9:" + Convert.ToInt32(7.9999));
            Console.WriteLine("8.5:" + Convert.ToInt32(8.5));
            Console.WriteLine("8.501:" + Convert.ToInt32(8.501));
            Console.WriteLine("9.5:" + Convert.ToInt32(9.5));
            Console.WriteLine("18.5:" + Convert.ToInt32(18.5));
            Console.WriteLine("19.5:" + Convert.ToInt32(19.5));


            //Math.Round 預設為MidpointRounding.ToEven 
            Console.WriteLine("Math.Round:");
            Console.WriteLine("20.4:"+Math.Round(20.4));
            Console.WriteLine("20.5:"+Math.Round(20.5));
            Console.WriteLine("(AwayFromZero)20.5:" + Math.Round(20.5, MidpointRounding.AwayFromZero));
            Console.WriteLine("20.5:"+Math.Round(20.501));
            Console.WriteLine("20.6:"+Math.Round(20.6));
            Console.WriteLine("25.499:"+Math.Round(25.499));
            Console.WriteLine("25.501:"+Math.Round(25.501));

            //取小數點後兩位其餘捨去  先將目標值*100 剩餘捨棄後再/100
            Console.WriteLine("取11.11111 整數後小數點二位:" + (Math.Floor(11.11111 * 100)) / 100);
            //取四位
            Console.WriteLine("取 22.2222222222 整數後小數點四位:" + (Math.Floor(22.2222222222 * 10000)) / 10000);



            int v11 = 100;
            long v11_1 = 1234567890123456789;
            Console.WriteLine("String.Format用法 用處現在不明 預計實際使用性質不大");
            Console.WriteLine(String.Format($"這是v11訊息 : {v11}"));
            Console.WriteLine(String.Format($"這是v11_1訊息 : {v11_1}"));
            Console.WriteLine(String.Format("這是v11訊息 : {0,3}",v11));
            Console.WriteLine(String.Format("這是v11_1訊息 : {0,19} END", v11_1));
            Console.WriteLine(String.Format("這是v11_1訊息 : {0,25} END", v11_1));
            Console.WriteLine(String.Format("這是v11_1訊息 : {0,-25} END", v11_1));
            Console.WriteLine("\n"); Console.WriteLine("\n"); Console.WriteLine("\n"); Console.WriteLine("\n");



            //經典99乘法表
            int[] n_99 = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            for (var i = 0; i < 9; i++) {
                for(var k = 0; k < 9; k++){
                    Console.Write($"{n_99[i]}x{n_99[k]} = {n_99[i] * n_99[k]} ");
                    if (k == 8) {
                        Console.WriteLine("\n");
                    }
                }
            }














            System.Console.WriteLine("\n\n\n\n輸入任意鍵結束程式...");
            System.Console.ReadKey();

            


        }
    }


}
