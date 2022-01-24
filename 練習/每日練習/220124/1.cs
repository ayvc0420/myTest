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


            //string[] msg = new string[4];

            //Console.Write("你是誰?");
            //msg[0] = "你是 : " + Console.ReadLine();
            //Console.Write("\n你幾歲?");
            //msg[1] = "你今年 : " + Console.ReadLine();
            //Console.Write("\n你用什麼手機?");
            //msg[2] = "你使用的手機為 : " + Console.ReadLine();
            //Console.Write("\n推薦嗎?");
            //msg[3] = "你認為手機是 : " + Console.ReadLine();

            //Console.WriteLine("\n\n請稍後...\n");
            //Thread.Sleep(3000);
            //foreach (var i in msg) {
            //    Console.WriteLine(i);
            //}



            //new一個物件 用來產生隨機數字 根據Microsoft docs解釋演算法為 Seminumerical
            var rand = new Random();
            for (var i = 0; i < 2; i++) {
                Console.WriteLine(rand.Next(80, 101));
            }





            //提示訊息讓使用者輸入兩個數字 並在範圍內產出一個隨機數字顯示
            //int randNumber = 0;
            //Console.WriteLine("輸入兩個數字顯示兩個數字範圍內的隨機數字:");
            //Console.Write("第一個數字: ");
            //int v1 = Convert.ToInt32(Console.ReadLine());
            //Console.Write("第二個數字: ");
            //int v2 = Convert.ToInt32(Console.ReadLine());
            //if (v1 > v2) {
            //    randNumber = v1;
            //    v1 = v2;
            //    v2 = randNumber;
            //    randNumber = rand.Next(v1, v2);
            //} else {
            //    randNumber = rand.Next(v1, v2);
            //}
            //Console.WriteLine($"隨機數字為 : {randNumber}");


            // 嘗試用陣列的方式寫出來
            //int[] randNumber = new int[3];
            //Console.WriteLine("輸入兩個數字顯示兩個數字範圍內的隨機數字:");
            //randNumber[0] = Convert.ToInt32(Console.ReadLine());
            //randNumber[1] = Convert.ToInt32(Console.ReadLine());
            //if (randNumber[0] > randNumber[1]) {
            //    randNumber[2] = randNumber[0];
            //    randNumber[0] = randNumber[1];
            //    randNumber[1] = randNumber[2];

            //    randNumber[2] = rand.Next(randNumber[0], randNumber[1]);
            //} else {
            //    randNumber[2] = rand.Next(randNumber[0] = randNumber[1]);
            //}
            //Console.WriteLine($"隨機數字為 : {randNumber[2}");







            //var names = new List<string> { "小美", "小明" };
            //foreach (var i in names) {
            //    Console.WriteLine(i);
            //}
            //names.Add("冰淇淋");
            //names.Add("好吃");
            //names.Remove("小明");

            //foreach (var i in names) {
            //    Console.WriteLine(i);
            //}
            ////包含4個內容 長度則是3
            // Console.WriteLine("Count:"+names.Count + "Length:"+name.Length);


            // Console.Write("輸入查詢內容:");
            // var index = names.IndexOf(Console.ReadLine());
            // if(index != -1) {
            //     Console.WriteLine($"找到了! {names[index]} 的索引位置在 {index}");
            // } else {
            //     Console.WriteLine($"沒有找到這個東西");
            // }


            // 根據挑戰 https://docs.microsoft.com/zh-tw/dotnet/csharp/tour-of-csharp/tutorials/list-collection?tutorial-step=5
            // 此處故意寫<=20 用意為看出後一個數字內容 正常應為<20(只做20次 第21次不做)
            var fibonacciNumbers = new List<int> { 1, 1 };
            for (int i = 0; i <= 20; i++) {
                Console.Write("目前是"+ (i+1) +"次");
                fibonacciNumbers.Add(fibonacciNumbers[i] + fibonacciNumbers[i + 1]);
                Console.WriteLine(fibonacciNumbers[i]);
            }







            System.Console.WriteLine("\n\n\n\n輸入任意鍵結束程式...");
            System.Console.ReadKey();

            


        }
    }


}
