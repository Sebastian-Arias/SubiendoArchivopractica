function traerInformacioMessage(){
    $.ajax({
        url:"https://gd451fb099317da-db202109261450.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items)
        }
    });
}

function pintarRespuestaMessage(items){
    let myTable="<table>";
    for(f=0;f<items.length;f++){
        myTable+="<tr>";
        myTable+="<td>" +items[f].id+"</td>";
        myTable+="<td>" +items[f].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMessage("+items[f].id+")'>Borrar</button> </td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMessage").append(myTable);

}

function guardarInformacionMessage(){
    let myData={
        id:$("#ID").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gd451fb099317da-db202109261450.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#ID").val("");
            $("#messagetext").val("");
            traerInformacioMessage();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionMessage(){
    let myData={
        id:$("#ID").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gd451fb099317da-db202109261450.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#ID").val("");
            $("#messagetext").val("");
            traerInformacioMessage();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMessage(idElemento1){
    let myData={
        id:idElemento1
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gd451fb099317da-db202109261450.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacioMessage();
            alert("Se ha Eliminado.")
        }
    });
}
