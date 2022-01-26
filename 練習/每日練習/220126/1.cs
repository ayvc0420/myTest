using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.OutputEncoding = System.Text.Encoding.UTF8;



            //兩種方式求10個數字的平均值
            //double[] number = new double[12];
            //var number2 = new List<double> { };

            //for (var i = 0; i < 10; i++) {
            //    Console.WriteLine($"輸入第{i+1}個數字 : ");
            //    number[i] = Convert.ToInt32(Console.ReadLine());
            //    number[11] += number[i];
            //    number2.Add(number[i]);
            //}
            
            //Console.WriteLine("平均值是:"+number[11] / 10);
            //Console.WriteLine("(2)平均值是:" + number2.Average());



            string v1 = "今天是1/26，在學C#，沒吃早餐，你在幹嘛~?";
            string[] v2 = v1.Split('，');
            Console.WriteLine("v2:");
            foreach (var i in v2) {
                Console.WriteLine(i);
            }

            Console.WriteLine("Join v2 : "+String.Join(" / ",v2));

            StringBuilder v3 = new StringBuilder(v1);
            Console.WriteLine("前:"+v3);
            v3.Append("好想吃麥當勞");
            Console.WriteLine("後:"+v3);
            string v4 = v1.Replace("，","~，");
            Console.WriteLine("v4 : "+v4);
            //字串分割
            string[] v5 = v4.Split(new char[2] { '~','，'});
            foreach (var i in v5) {
                Console.WriteLine(i);
            }

            Console.WriteLine("\n\nSubstring");
            string v6 = v3.ToString();
            Console.WriteLine(v6.Substring(24));
            //以下這個方法根據Substring用法 第一個參數為起始值 第二個參數依照第一個參數為基準從0開始算
            //因此先找到起始位置 以及第二個結束位置減掉起始位置符合參數的基準需求 由於結束位置不納入計算因此還要再+1
            Console.WriteLine(v6.Substring(v6.IndexOf("好"),v6.IndexOf("勞") - v6.IndexOf("好")+1));


            Console.WriteLine("StartsWith(今天):"+v6.StartsWith("今天"));
            Console.WriteLine("StartsWith(天):"+v6.StartsWith("天"));
            Console.WriteLine("EndsWith(麥當勞):" + v6.EndsWith("麥當勞"));
            Console.WriteLine("EndsWith(麥):" + v6.EndsWith("麥"));
            Console.WriteLine("EndsWith(勞):" + v6.EndsWith("勞"));
            Console.WriteLine("Contains(麥當勞):" + v6.Contains("麥當勞"));
            Console.WriteLine("Contains(肯德基):" + v6.Contains("肯德基"));


            Console.WriteLine("\n\n");
            string v7 = "   " + v3.ToString() + "   ";
            Console.WriteLine($"v7+End : {v7}" + "End");
            Console.WriteLine($"v7.Trim()+End : {v7.Trim()} " + "End");

            Console.WriteLine("Replace" + v7.Replace("C#", "JavaScript"));
            
            Console.WriteLine("Insert" + v7.Insert(v7.IndexOf("C#")+("C#").Length,"、JavaScript"));


            //手機
            Regex condition = new Regex(@"^[0-9]{2}-[0-9]{8}$");
            //身分證
            Regex condition1 = new Regex(@"^[A-XZ][12][0-9]{8}$");


            //Console.Write("\n\n\n\n\n\n輸入手機號碼 : ");
            //string phone = Console.ReadLine();
            //if (condition.IsMatch(phone) == true) {
            //    Console.WriteLine($"輸入正確，輸入的號碼為{phone}");
            //} else {
            //    Console.WriteLine("輸入錯誤!!必須為xx-xxxxxxxx");
            //}



            //檢驗碼太麻煩了 這邊先跳過不寫 具體規則可以參考
            //https://web.fg.tp.edu.tw/~anny/idtest.htm?fbclid=IwAR0pI0ymRmanb3sx2noxsfYO1UgzSBVyh3VIM-U3Sl_TaGg6ZrezNT5srwg
            //https://ithelp.ithome.com.tw/articles/10217795
            Console.WriteLine("\n\n\n\n輸入身分證字號 : ");
            string card = Console.ReadLine();

            if (condition1.IsMatch(card) == true) {
                Console.WriteLine($"輸入正確，輸入的身分字號為 : {card}");
            }
            else {
                Console.WriteLine("輸入錯誤!!必須為身分證字號格式");
            }











            System.Console.WriteLine("\n\n\n\n輸入任意鍵結束程式...");
            System.Console.ReadKey();

            


        }
    }


}
