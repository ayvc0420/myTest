<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">


    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" DeleteCommand="DELETE FROM [user資料] WHERE [姓名] = @姓名" InsertCommand="INSERT INTO [user資料] ([姓名], [性別], [年齡], [興趣]) VALUES (@姓名, @性別, @年齡, @興趣)" SelectCommand="SELECT * FROM [user資料]" UpdateCommand="UPDATE [user資料] SET [性別] = @性別, [年齡] = @年齡, [興趣] = @興趣 WHERE [姓名] = @姓名">
        <DeleteParameters>
            <asp:Parameter Name="姓名" Type="String" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="姓名" Type="String" />
            <asp:Parameter Name="性別" Type="String" />
            <asp:Parameter Name="年齡" Type="String" />
            <asp:Parameter Name="興趣" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="性別" Type="String" />
            <asp:Parameter Name="年齡" Type="String" />
            <asp:Parameter Name="興趣" Type="String" />
            <asp:Parameter Name="姓名" Type="String" />
        </UpdateParameters>
</asp:SqlDataSource>
    <asp:DetailsView ID="DetailsView1" runat="server" Height="50px" Width="200px" OnPageIndexChanging="DetailsView1_PageIndexChanging" AutoGenerateRows="False" BackColor="LightGoldenrodYellow" BorderColor="Tan" BorderWidth="1px" CellPadding="2" DataKeyNames="姓名" DataSourceID="SqlDataSource1" ForeColor="Black" GridLines="None">
        <AlternatingRowStyle BackColor="PaleGoldenrod" />
        <EditRowStyle BackColor="DarkSlateBlue" ForeColor="GhostWhite" />
        <Fields>
            <asp:BoundField DataField="姓名" HeaderText="姓名" ReadOnly="True" SortExpression="姓名" />
            <asp:BoundField DataField="性別" HeaderText="性別" SortExpression="性別" />
            <asp:BoundField DataField="年齡" HeaderText="年齡" SortExpression="年齡" />
            <asp:BoundField DataField="興趣" HeaderText="興趣" SortExpression="興趣" />
            <asp:CommandField ShowInsertButton="True" />
        </Fields>
        <FooterStyle BackColor="Tan" />
        <HeaderStyle BackColor="Tan" Font-Bold="True" />
        <PagerStyle BackColor="PaleGoldenrod" ForeColor="DarkSlateBlue" HorizontalAlign="Center" />
    </asp:DetailsView>
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="False" BackColor="LightGoldenrodYellow" BorderColor="Tan" BorderWidth="1px" CellPadding="2" DataKeyNames="姓名" DataSourceID="SqlDataSource1" ForeColor="Black" GridLines="None" OnSelectedIndexChanged="GridView1_SelectedIndexChanged" PageSize="5">
        <AlternatingRowStyle BackColor="PaleGoldenrod" />
        <Columns>
            <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
            <asp:BoundField DataField="姓名" HeaderText="姓名" ReadOnly="True" SortExpression="姓名" />
            <asp:BoundField DataField="性別" HeaderText="性別" SortExpression="性別" />
            <asp:BoundField DataField="年齡" HeaderText="年齡" SortExpression="年齡" />
            <asp:BoundField DataField="興趣" HeaderText="興趣" SortExpression="興趣" />
        </Columns>
        <FooterStyle BackColor="Tan" />
        <HeaderStyle BackColor="Tan" Font-Bold="True" />
        <PagerStyle BackColor="PaleGoldenrod" ForeColor="DarkSlateBlue" HorizontalAlign="Center" />
        <SelectedRowStyle BackColor="DarkSlateBlue" ForeColor="GhostWhite" />
        <SortedAscendingCellStyle BackColor="#FAFAE7" />
        <SortedAscendingHeaderStyle BackColor="#DAC09E" />
        <SortedDescendingCellStyle BackColor="#E1DB9C" />
        <SortedDescendingHeaderStyle BackColor="#C2A47B" />
    </asp:GridView>


</asp:Content>
