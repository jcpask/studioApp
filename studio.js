// https://ghibliapi.herokuapp.com/
var studioPromise = d3.json("https://ghibliapi.herokuapp.com/films")

studioPromise.then(
    function(film)
    {
        d3.select("#banner").text("select")
    }
)