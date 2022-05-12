$('#submit').click(function (event){
    event.preventDefault()
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

function showsImg(answer) {
    $('#imgDiv').css('display', 'flex')
    $('#vidDiv').css('display', 'none')
    $('#img-api').attr("src", answer.url)
    $('#container-media_h2').text(answer.title)
    $('#container-media_p').text(answer.explanation)
}

function showsVid(answer) {
    $('#vidDiv').css('display', 'flex')
    $('#imgDiv').css('display', 'none')
    $('#vid-api').attr("src", answer.url)
    $('#container-media_h2').text(answer.title)
    $('#container-media_p').text(answer.explanation)
}