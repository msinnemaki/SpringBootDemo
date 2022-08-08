let button = document.getElementById("button")

button.addEventListener('click', async ()=>
{

    try 
    {

        const raw_response = await fetch(`http://localhost:8080/app/candies`);

        if (!raw_response.ok)
        {
            throw new Error(raw_response.status)

        }
            const json_data = await raw_response.json();

            console.log(json_data)

            var input = document.getElementById("input");

            input.innerText = `My favorite candy is ${json_data[2].name} and they are sold at ${json_data[2].shop.shopName} for $${json_data[2].price}!
            They only have ${json_data[2].shop.inventoryCount} left!`;

    }

    catch(error)

    {
    console.log(error)
    }
});
