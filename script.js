      const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
      const obj =JSON.parse(this.responseText);     
          // document.getElementById("product_title").innerHTML = obj[0].title;
          // document.getElementById("desciption").innerHTML = obj[0].description;
          // document.getElementById("category").innerHTML ="Category: "+obj[0].category;
          // document.getElementById("price").innerHTML ="Price: "+obj[0].price;
          // document.getElementById("count").innerHTML ="Count: "+obj[0].rating.count;
          // document.getElementById("image").src=obj[0].image;
          // document.getElementById("rate").innerHTML ="Rate: "+obj[0].rating.rate;
      for(let i=0;i<obj.length;i++) {
        const cards= document.createElement("div");
        cards.className="card";
        cards.id="card"+i; 
        document.getElementById("body_context").appendChild(cards); 
        
        const images = document.createElement("img");
        images.setAttribute("src",obj[i].image);
        images.className="card-img-top";
        document.getElementById("card"+i).appendChild(images);
        
        const card_body = document.createElement("div");
        card_body.className="card-body";
        card_body.id="card-body"+i;
        document.getElementById("card"+i).appendChild(card_body);

        const card_name = document.createElement("h5");
        card_name.innerHTML=obj[i].title;
        card_name.className="card-title";
        document.getElementById("card-body"+i).appendChild(card_name);

        const card_dis = document.createElement("p");
        card_dis.innerHTML=obj[i].description;
        card_dis.className="card-text";
        document.getElementById("card-body"+i).appendChild(card_dis);

        const list_tag = document.createElement("ul");
        list_tag.className = "list-group list-group-flush";
        list_tag.id = "list"+i;
        document.getElementById("card"+i).appendChild(list_tag);

        const list_item_1=document.createElement("li");
        list_item_1.className="list-group-item";
        list_item_1.innerHTML="Category: "+obj[i].category;
        document.getElementById("list"+i).appendChild(list_item_1);

        const list_item_2=document.createElement("li");
        list_item_2.className="list-group-item";
        list_item_2.innerHTML="Price: "+obj[i].price;
        document.getElementById("list"+i).appendChild(list_item_2);

        const list_item_3=document.createElement("li");
        list_item_3.className="list-group-item";
        list_item_3.innerHTML="Count: "+obj[i].rating.count;
        document.getElementById("list"+i).appendChild(list_item_3);

        const list_item_4=document.createElement("li");
        list_item_4.className="list-group-item";
        list_item_4.innerHTML="Rate: "+obj[i].rating.rate;
        document.getElementById("list"+i).appendChild(list_item_4);

        const card_bottom = document.createElement("div");
        card_bottom.className="card-body";
        card_bottom.id="card_bottom"+i;
        document.getElementById("card"+i).appendChild(card_bottom);

        const add_cart= document.createElement("a")
        add_cart.className="card-link";
        add_cart.innerHTML="Add to cart";
        add_cart.setAttribute("href","#");
        document.getElementById("card_bottom"+i).appendChild(add_cart);

        const buy_now= document.createElement("a")
        buy_now.className="card-link";
        buy_now.innerHTML="buy now";
        buy_now.setAttribute("href","#");
        document.getElementById("card_bottom"+i).appendChild(buy_now);
      }
      }
      xhttp.open("GET", "https://fakestoreapi.com/products");
      xhttp.send();