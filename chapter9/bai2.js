var products = [
    {
        name: "A",
        nsx: "A",
        price: 5000,
        category: "A"
    },
    {
        name: "B",
        nsx: "A",
        price: 7000,
        category: "B"
    },
    {
        name: "C",
        nsx: "B",
        price: 6000,
        category: "C"
    },
    {
        name: "E",
        nsx: "A",
        price: 3000,
        category: "A"
    },
    {
        name: "D",
        nsx: "A",
        price: 2000,
        category: "A"
    },
    {
        name: "F",
        nsx: "A",
        price: 7000,
        category: "A"
    },
    {
        name: "G",
        nsx: "C",
        price: 9000,
        category: "A"
    },
    {
        name: "L",
        nsx: "C",
        price: 9000,
        category: "A"
    }
]
var length = products.length;
for(let i = 0;i<length;i++){
    $('table').append("<tr></tr>");
    $($('table tr')[i+1]).html('<td>'+products[i].name+'</td>'+'<td>'+products[i].nsx+'</td>'+'<td>'+products[i].price+'</td>'+'<td>'+products[i].category+'</td>'+'<td><button id='+(i+1)+'>add</button></td>'); 
}

var cart = window.localStorage;
$('button').click(function(){
    var a = $(this).attr('id');
    console.log(a);
    if(cart && a!='viewcart' && a!='clearcart'){
        cart.setItem(localStorage.length+1, (a-1));
    }
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
    });
$("#viewcart").click(function showcart(){
    $('#showcart').show();
    $("#showcart").html("<tr><th>Tên</td><th>Nhà sản xuất</td><th>Giá</td><th>Loại</td></tr>");
    console.log("leng: "+localStorage.length);
    for(let i = 0;i<localStorage.length;i++){
        var j = localStorage.getItem(localStorage.key(i));
        console.log("j: "+j);
        $('#showcart').append('<tr><td>'+products[j].name+'</td>'+'<td>'+products[j].nsx+'</td>'+'<td>'+products[j].price+'</td>'+'<td>'+products[j].category+'</td></tr>');
    }
});
$('#clearcart').click(function(){
    cart.clear();
    $("#showcart").html("<tr><th>Tên</td><th>Nhà sản xuất</td><th>Giá</td><th>Loại</td></tr>");
});



