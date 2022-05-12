$('#submit').click(function (e){
    e.preventDefault()
    var dateInput = $('#birthdayInput').val()
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=pYIbv70Np8uaQJDIZumLpNB2oOJWcChnW7gwsgk9&date=${dateInput}`,
    success: function (answer) {
        if (answer.media_type == "video") {
            console.log('entrou')
            console.log(answer)
            showsVid(answer)
        } else {
            showsImg(answer)
        }
    }
})
})