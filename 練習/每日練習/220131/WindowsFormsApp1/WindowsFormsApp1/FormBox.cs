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
    public partial class FormBox : Form
    {


        public Action Login;
        public Action Clear;

        public FormBox()
        {
            InitializeComponent();
            //右上角關閉取消顯示
            ControlBox = false;
        }


        string userName = "root";
        string userPassword = "rootpassword";

 

        private void button1_Click(object sender, EventArgs e) {


            if (textBox1.Text != userName || textBox2.Text != userPassword) { 
                MessageBox.Show("帳號密碼錯誤!");
                textBox2.Text = "";
                return;
            }
            if (Login != null) {
                Login();
                Close();
            }
        }
        private void button2_Click(object sender, EventArgs e) {
            if (Clear != null) {
                Clear();
                Close();
            }
        }

        private void button3_Click(object sender, EventArgs e) {
            MessageBox.Show("帳號:root 密碼:rootpassword");
        }
    }
}
