<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <h1 class="hi">Hello world!</h1>

    <div class="user_form">
        <label for="name">姓名:</label>
        <input type="text" name="name" id="name" autocomplete="off" />
        <label>性別:</label>
        <div>
            <label for="gender_F">男</label>
            <input type="radio" name="gender" value="F" id="gender_F"/>
            <label for="gender_M">女</label>
            <input type="radio" name="gender" value="M" id="gender_M"/>
        </div>
        <label for="age">年齡:</label>
        <input type="number" name="age" id="age" />
        <button value="submit">送出</button>
    </div>


</asp:Content>
