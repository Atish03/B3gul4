$(".button").click(function() {
    const obj = $(this).parent();
    if (obj.attr("data-stat") == "closed") {
        obj.find("span").eq(0).css({"display": "flex"});
        obj.find("div").eq(1).css({"display": "none"});
        obj.attr("data-stat", "opened");
        $(this).html("CLOSE");
    }else {
        console.log(obj.attr("class"));
        obj.find("span").eq(0).css({"display": "none"});
        obj.find("div").eq(1).css({"display": "flex"});
        obj.attr("data-stat", "closed");
        $(this).html("VIEW");
    }
})