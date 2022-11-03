$ (function() {
    $.getJSON("js/automoveis.json", function(data) {

        for(var i = 0; i < data['automoveis'].length; i++) {
            $("TableData").append("<tr>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['MARCA'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CARRO'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("TableData").append("<td scope='col'>" + data['automoveis'] [1] ['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
            $("TableData").append("<tr>");
        }
    });    
});