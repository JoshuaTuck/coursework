var albums = [{
    "title": "The Attic Sessions" ,
    "artist": "Vanattica"
    "artwork": "https://lastfm-img2.akamaized.net/i/u/300x300/271331ca22ec45cf9452abce33d32cde.jpg"
    "tracks": [{
        "title": "Confidental liar"
        "mp3": "U:\\coursework\\psdbarebones-master\\resources\\client\\Songs"

    }, {
        "title":
        "mp3":
        "lyr
    }, {
        "title":
        "mp3":

    }]
},
    {
        "title":
        "artist": "
        "artwork":
        "tracks": [{
            "title":
            "mp3":

        }, {
            "title":
            "mp3":

        }, {
            "title":
            "mp3":

        }]
    }];


var albumElement  = document.getElementById('album-select');
albumElement.addEventListener('change', function(){
    // populate songs for selected album
    populateSongs(albumElement.value)
});


for(var i=0;albums.length;i++){
    var option = document.createElement("option");
    option.text = albums[i].title;
    albumElement.add(option)
}

function populateSongs(album) {
    var songsTable  = document.getElementById('songs-table');


    while(songsTable.rows.length > 0) {
        songsTable.deleteRow(0);
    }




    for(var i=0;albums.length;i++){

        //check selected album
        if(albums[i].title == album) {


            for(var track=0;albums[i].tracks.length;track++) {

                var row = songsTable.insertRow(track);
                var cell = row.insertCell(0);

                cell.innerHTML = albums[i].tracks[track].title;



                cell.setAttribute("title",albums[i].tracks[track].title);
                cell.setAttribute("album",albums[i].title);
                cell.setAttribute("file",albums[i].tracks[track].mp3);



                cell.addEventListener('click',function(){

                    play(this);
                });

            }
        }
    }




}

function play(element) {
    // retrieve passed data from element attributes
    var songTitle  = element.getAttribute('title');
    var albumTitle = element.getAttribute('album');
    var songFile   = element.getAttribute('file');

    document.getElementById('audio-player').src = songFile;
    document.getElementById('song-album').innerHTML = albumTitle;
    document.getElementById('song-title').innerHTML = songTitle;

    console.log(song);

}