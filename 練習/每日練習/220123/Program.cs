using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;


namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.OutputEncoding = System.Text.Encoding.UTF8;

            

            int a = int.MaxValue;
            int b = int.MinValue;

            System.Console.WriteLine($"int最大值為: {a} int最小值為: {b}");
            //所謂溢位
            System.Console.WriteLine($"最大值+1的值為:{a + 1} 最小值的-1值為:{b - 1}");




            double c = double.MaxValue;
            double c_1 = double.MinValue;
            System.Console.WriteLine($"double的最大值為:{c} double最小值為:{c_1}");
            float d = float.MaxValue;
            float d_1 = float.MinValue;
            System.Console.WriteLine($"float的最大值為:{d} float最小值為:{d_1}");


            double e = 1.0 / 3.0;
            System.Console.WriteLine(e);
            decimal e_1 = 1.0M / 3.0M;
            System.Console.WriteLine(e_1);
            System.Console.WriteLine(decimal.MaxValue);


            System.Console.WriteLine($"半徑2.5cm 求圓面積為: {2.5 * 2.5 * Math.PI}");


            //以下開始省略System.

            string test1 = "雷光科技大學";
            bool test1Bool = test1.IndexOf("雷光") != -1;
            if (test1Bool)
            {
                Console.WriteLine("有找到");
            } else
            {
                Console.WriteLine("沒找到");
            }


            //ystem.Console.Write("輸入你的名字:");
            //string test = System.Console.ReadLine();
            //System.Console.Write($"\n\n\n你叫{test} 是一個87 {test.GetType()}");




            Console.WriteLine("while:");
            int whileNumber = 1;
            while (whileNumber <= 10)
            {
                Console.WriteLine(whileNumber);
                whileNumber++;
            }

            Console.WriteLine("do while:");
            int doNumber = 0;
            bool test2 = true;
            do {
                if (doNumber > 10) {
                    test2 = false;
                } else {
                    Console.WriteLine($"test2是{test2}狀態 這是第{doNumber}次");
                    doNumber++;
                }

            } while (test2);





            Console.WriteLine("for:");
            int forNumber = 10;
            for (int i = 0; i <= forNumber; i++) {
                Console.WriteLine($"這是 第{i}次 的for訊息\n\n");
            }
            
            
            for (int i = 0; i < 5; i++) {
                for(char k = 'a'; k < 'e'; k++) {
                    Console.WriteLine($"這是 第{i}次k的值是{k} 的for訊息");

                }
            }


            //https://docs.microsoft.com/zh-tw/dotnet/csharp/tour-of-csharp/tutorials/branches-and-loops?tutorial-step=6
            
            int aab = 0;
            for (var i = 0; i <= 20; i++) {
                if (i % 3 == 0) {
                    aab += i;
                }
            }
            Console.WriteLine("\n\n"+aab);


            string x = "10";
            var x_number = Convert.ToInt32(x);
            Console.WriteLine($"{x_number} GetType: {x_number.GetType()}");


            int[] array1 = new int[5]{ 10,20,30,40,50 };
            for (int i = 0; i < 999; i++) {
                if (i < array1.Length) {
                    Console.WriteLine(array1[i]);
                } else {
                    break;
                }
            }

            Console.WriteLine("Pow:" + Math.Max(9, 3));

            string[] array2 = { "野原廣志", "野原美冴", "野原新之助","野原葵","野原小白" };

            Console.WriteLine($"我們一家總共有{array2.Length}人，分別是:");
            foreach (var i in array2) {
                Console.Write($"{i} ");
            }

            Thread.Sleep(1500);
            Console.WriteLine($"\n爸爸是:{array2[0]} 媽媽是:{array2[1]} 兒子是:{array2[2]} 女兒是:{array2[3]} 寵物是:{array2[4]}");
            Thread.Sleep(3000);
            Console.WriteLine("接下來要表演的是 數數");
            Thread.Sleep(1000);
            for (var i = 0; i <= 10; i++) {
                Console.WriteLine($"{array2[2]}數數: {i}");
                Thread.Sleep(1000);

                if (i == 10) {
                    Console.WriteLine("完畢!");
                }
            }

            







            


            System.Console.WriteLine("\n\n\n\n輸入任意鍵結束程式...");
            System.Console.ReadKey();

            


        }
    }




}
