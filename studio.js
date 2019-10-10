// https://ghibliapi.herokuapp.com/
var studioPromise = d3.json("https://ghibliapi.herokuapp.com/films")

studioPromise.then(
    function(film)
    {
        d3.select("#banner").text("Click on a film you would like to know more about")
    }
)
