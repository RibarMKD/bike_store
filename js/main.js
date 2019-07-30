// write your code here
// use products array from the other file in here 
// (yes you can use it, it doesn't matter if it's from another file)

    $(function(){
        let card = $("#card");
    products.forEach(function(e){
        card.append(`<div class="col-md-4">
                            <div class="border">
                                <img src="img/${e.image}.png" width="100%" height="200px" style="padding:20px">
                                <div class="bg">
                                  <div><b>${e.name}</b></div>
                                  <div>${e.price}</div>
                                </div>
                            </div>
                        </div>`);
    });
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;
        let counter4 = 0;
        let counter5 = 0;
        let counter6 = 0;
        let counter7 = 0;
        let counter8 = 0;
        let counter9 = 0;
        let counter10 = 0;
     
     
        products.forEach(function(e){
            if(e.brand === 'LE GRAND BIKES'){
                counter1 ++;
            } else if (e.brand === 'KROSS'){
                counter2++;
            } else if(e.brand === 'EXPLORER'){
                counter3 ++;
            } else if (e.brand === 'VISITOR'){
                counter4 ++;
            } else if (e.brand === 'PONY'){
                counter5 ++;
            } else if (e.brand === 'FORCE'){
                counter6 ++;
            } else if (e.brand === 'E-BIKES'){
                counter7 ++;
            } else if (e.brand === 'IDEAL'){
                counter8 ++;
            }
        });
     
     
        $(".badge")[3].innerHTML += counter1;
        $(".badge")[4].innerHTML += counter2;
        $(".badge")[5].innerHTML += counter3;
        $(".badge")[6].innerHTML += counter4;
        $(".badge")[7].innerHTML += counter5;
        $(".badge")[8].innerHTML += counter6;
        $(".badge")[9].innerHTML += counter7;
        $(".badge")[10].innerHTML += counter8;
     
        products.forEach(function(element){
            if (element.gender === 'MALE'){
                counter9 ++;
            } else {
                counter10 ++;
            }
        })
     
        $(".badge")[1].innerHTML += counter9;
        $(".badge")[2].innerHTML += counter10;
        $(".badge")[0].innerHTML += products.length;

        $('.pol').on('click', function(){
            let text = $(this).text();
            let niza = products.filter(e => e.gender.toUpperCase() === text.toUpperCase());
            card.html('');
            niza.forEach(function(e){
                card.append(`<div class="col-md-4">
                                    <div class="border">
                                        <img src="img/${e.image}.png" width="100%" height="200px" style="padding:20px">
                                        <div class="bg">
                                          <div><b>${e.name}</b></div>
                                          <div>${e.price}</div>
                                        </div>
                                    </div>
                                </div>`);
            });
        });

        $('.brand').on('click', function(){
            let text = $(this).text();
            let niza = products.filter(e => e.brand === text);
            card.html('');
            niza.forEach(function(e){
                card.append(`<div class="col-md-4">
                                    <div class="border">
                                        <img src="img/${e.image}.png" width="100%" height="200px" style="padding:20px">
                                        <div class="bg">
                                          <div><b>${e.name}</b></div>
                                          <div>${e.price}</div>
                                        </div>
                                    </div>
                                </div>`);
            });
        });
     
        $('.all').on('click', function(){
            card.html('');
        products.forEach(function(e){
            card.append(`<div class="col-md-4">
                                <div class="border">
                                    <img src="img/${e.image}.png" width="100%" height="200px" style="padding:20px">
                                    <div class="bg">
                                      <div><b>${e.name}</b></div>
                                      <div>${e.price}</div>
                                    </div>
                                </div>
                            </div>`);
        });
    });
     
     
     });