$('#viajar').click(function (event){
    event.preventDefault()
    const dateInput = $('#tempo').val()
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=q8VDriYTBOXVumiUss7P6vDW1UO9SceEy1zEbaAJ&date=${dateInput}`,
    success: function (answer) {
        if (answer.media_type == "video") {
            mostrandoVideo(answer)
        } else {
            mostrandoImagem(answer)
        }
    }
})
})

function mostrandoImagem(answer) {
    $('#imgDiv').css('display', 'flex')
    $('#vidDiv').css('display', 'none')
    $('#imgApi').attr("src", answer.url)
    $('#mediaTitulo').text(answer.title)
    $('#mediaParagrafo').text(answer.explanation)
}

function mostrandoVideo(answer) {
    $('#vidDiv').css('display', 'flex')
    $('#imgDiv').css('display', 'none')
    $('#vid-api').attr("src", answer.url)
    $('#mediaTitulo').text(answer.title)
    $('#mediaParagrafo').text(answer.explanation)
}