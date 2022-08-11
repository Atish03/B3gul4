$(".button").click(function() {
    const obj = $(this).parent();
    const but = $(this);
    if (obj.attr("data-stat") == "closed") {
        obj.find("span").eq(0).css({"display": "flex"});
        obj.find("div").eq(1).css({"display": "none"});
        obj.attr("data-stat", "opened");
        obj.css({"padding": "30px", "width": "80%"});
        but.css({"height": "35px", "width": "80px", "background-color": "aliceblue", "right": "-45.5%"});
        but.html("CLOSE");
    }else {
        console.log(obj.attr("class"));
        obj.find("span").eq(0).css({"display": "none"});
        obj.find("div").eq(1).css({"display": "flex"});
        obj.attr("data-stat", "closed");
        but.css({"height": "80px", "width": "100%", "background-color": "transparent", "right": "0%"});
        obj.css({"padding": "0px", "width": "70%"});
        $(this).html("");
    }
})