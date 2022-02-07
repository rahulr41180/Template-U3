
let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
var AddTocart = JSON.parse(localStorage.getItem("cart"))||[];
function count()
{
    document.querySelector("#count").innerHTML = `: ${AddTocart.length}`;
}
count();
async function getfood()
{
    let array = [];
    try
    {
        let resolve = await fetch(url);

        let data = await resolve.json();
        array.push(data);

        append(array);
        //console.log(data);
    }
    catch(error)
    {
        console.log("error :", error);
    }
}
getfood();
function append(data)
{
    

    document.querySelector("#menu").innerHTML = "";

    console.log(data[0].meals);
    data[0].meals.map(function(element)
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

        var AddtoCart = document.createElement("button");
        AddtoCart.innerHTML = "Add To Cart";
        AddtoCart.setAttribute("id","addtocart");
        AddtoCart.addEventListener("click",function()
        {
            AddToCart(element,price1);
        });

        document.querySelector("#menu").append(ElementBox);
        ElementBox.append(ImageBox,DetailsBox);
        ImageBox.append(Image);
        DetailsBox.append(name,price,br,AddtoCart);
    });
    function AddToCart(element,price)
    {
        console.log(element,price);
        element["Price"] = price;
        console.log(element);
        AddTocart.push(element);
        console.log(AddTocart);
        localStorage.setItem("cart",JSON.stringify(AddTocart));
        count();
        //window.location.href = "index.html";
    }
    //document.querySelector("#count").innerHTML = `Item in cart : ${AddTocart.length}`;
}
