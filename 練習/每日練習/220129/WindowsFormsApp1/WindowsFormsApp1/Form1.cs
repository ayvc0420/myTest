using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class form1 : Form
    {
        public form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e) {

        }

        private void label1_Click(object sender, EventArgs e) {

        }
        private void textNumber1_TextChanged(object sender, EventArgs e) {
            
        }

        private void textNumber2_TextChanged(object sender, EventArgs e) {

        }
        private void textNumber3_TextChanged(object sender, EventArgs e) {

        }

        private void button1_Click(object sender, EventArgs e) {
            checkTextNumber();
            clacNumber("+");
        }

        private void button2_Click(object sender, EventArgs e) {
            checkTextNumber();
            clacNumber("-");
        }

        private void button3_Click(object sender, EventArgs e) {
            checkTextNumber();
            clacNumber("*");
        }

        private void button4_Click(object sender, EventArgs e) {
            checkTextNumber();
            clacNumber("/");
        }

        //這個範例還有更多地方可以優化如鍵盤key事件 今日以瀏覽心得文章為主 因此不做
        private void checkTextNumber(){
            if (textNumber1.Text == string.Empty || textNumber2.Text == string.Empty) { 
                MessageBox.Show("欄位必須填入數字");
                return;
            }else if(textNumber1.Text.All(char.IsDigit) == false || textNumber2.Text.All(char.IsDigit) == false) {
                MessageBox.Show("欄位必須填入數字");
                return;
            }
        }

        private void clacNumber(string method) {

            int n1 = Convert.ToInt32(textNumber1.Text);
            int n2 = Convert.ToInt32(textNumber2.Text);
            int n3 = 0;
            if (method == "+") {
                n3 = n1 + n2;
            } else if (method == "-") { 
                n3 = n1 - n2;
            } else if (method == "*") {
                n3 = n1 * n2;
            } else if (method == "/") {
                n3 = n1 / n2;
            }


            textNumber3.Text = Convert.ToString(n3);

        }

    }
}
