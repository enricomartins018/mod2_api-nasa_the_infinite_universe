$(`#letsgo`).click(function(){

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=hxEuR6kaHxbzJMGWORqGp0wSaZiNq8uBGYOqllUk&date=' + $('#data').val(),
        success: function(result){
            $('#titulo').html(result.explanation);
            $('#foto').html(`<img src="${result.url}">`);
            $('#copyright').html(result.copyright);
        } 
    })   
    });