
var CartData = JSON.parse(localStorage.getItem("cart"));
//console.log(totalprice);
CartDataShow(CartData);
function CartItem()
{
    document.querySelector("#count").innerHTML = `: ${CartData.length}`;
}
CartItem();
console.log(CartData);

function CartDataShow(Data)
{
    console.log(Data);
    document.querySelector("#cart").innerHTML = "";

    Data.map(function(element,index)
    {
        console.log(element);
        var ElementBox = document.createElement("div");
        ElementBox.setAttribute("class","ElementBox");

        var ImageBox = document.createElement("div");
        ImageBox.setAttribute("class","ImageBox");
        var Image = document.createElement("img");
        Image.setAttribute("class","Image");
        Image.src = element.strMealThumb;

        var DetailsBox = document.createElement("div");
        DetailsBox.setAttribute("class","DetailsBox");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = `Meal : ${element.strMeal}`;
        var price = document.createElement("p");
        price.setAttribute("class","name");
        var price1 = Math.round(Math.random()*500);
        price.innerHTML = `Rs. ${price1}`;

        var br = document.createElement("br");

        var DeleteFromCart = document.createElement("button");
        DeleteFromCart.innerHTML = "Delete Item";
        DeleteFromCart.setAttribute("id","DeleteFromCart");
        DeleteFromCart.addEventListener("click",function()
        {
            DeleteCart(index,CartData);
        });

        document.querySelector("#cart").append(ElementBox);
        ElementBox.append(ImageBox,DetailsBox);
        ImageBox.append(Image);
        DetailsBox.append(name,price,br,DeleteFromCart);
    })

    function DeleteCart(index,CartData)
    {
        CartData.splice(index,1)
        console.log(CartData);
        localStorage.setItem("cart",JSON.stringify(CartData));
        CartItem();
        total();
        CartDataShow(CartData);
    }
    function total()
    {
    var totalprice = CartData.reduce(function(a,b)
    {
        return a + b.Price;
    },0);
    console.log(totalprice);
    document.querySelector("#total").innerHTML = `Total Price : ${totalprice}`
    }
    
    total()
}