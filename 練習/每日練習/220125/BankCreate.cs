using ConsoleApp1;
using System;
using System.Collections.Generic;


//建立一個命名空間 用來存放類別class
namespace methods {
    //建立類別功能
    public class BankAccount {
        private List<Transaction> allTransactions = new List<Transaction>();
        
        //定義屬性分別為 銀行帳戶 使用者 剩餘金額
        public string Number { get; }
        public string Owner { get; set; }
        public decimal Balance {
            get {
                decimal balance = 0;
                foreach (var item in allTransactions) {
                    balance += item.Amount;
                }
                return balance;
            }

        }



        //參數為  姓名(string)  初始金額(decimal)
        public BankAccount(string name, decimal initialBalance) {
            this.Owner = name;
            MakeDeposit(initialBalance, DateTime.Now, "初始金額");
            //this.Balance = initialBalance;
            this.Number = accountNumberSeed.ToString();
            accountNumberSeed++;

        }





        //手動設定起始帳戶號碼  private為只允許這個類型才可以使用 詳細可以參考https://docs.microsoft.com/zh-tw/dotnet/csharp/language-reference/keywords/private
        private static int accountNumberSeed = 1111111111;

        //建立兩個功能方法 methods function概念   參數為 交易金額 時間 訊息
        public void MakeDeposit(decimal amount, DateTime date, string note) {
            if(amount <= 0) {
                throw new ArgumentOutOfRangeException(nameof(amount), "存入金額必須為正數");
            }
            var deposit = new Transaction(amount, date, note);
            allTransactions.Add(deposit);
        }

        public void MakeWithdrawal(decimal amount, DateTime date, string note) {
            if (amount <= 0) {
                throw new ArgumentOutOfRangeException(nameof(amount), "領出金額必須為正數");
            }
            if(Balance - amount < 0) {
                throw new InvalidOperationException("無法提取，金額不足");
            }
            var withdrawal = new Transaction(-amount, date, note);
            allTransactions.Add(withdrawal);
        }
        





    }
    



}
