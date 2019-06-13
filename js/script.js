var allMarkers = [
    { id: 1,
      title: 'Alex Moore Park',
      lat: -41.225309,
      lng: 174.801646,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 2,
      title: 'Churton Park',
      lat: -41.208807,
      lng: 174.804183,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 3,
      title: 'Grenada North Park',
      lat: -41.187026,
      lng: 174.839096,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 4,
      title: 'Ian Galloway Park',
      lat: -41.278796,
      lng: 174.754900,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 5,
      title: 'Karori Park',
      lat: -41.285854,
      lng: 174.724048,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 6,
      title: 'Macalister Park',
      lat: -41.314663,
      lng: 174.773098,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 7,
      title: 'Nairnville Park',
      lat: -41.249949,
      lng: 174.785204,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm',
      }
    },
    { id: 8,
      title: 'Newtown Park',
      lat: -41.320935,
      lng: 174.782962,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 9,
      title: 'Pinkerton Park',
      lat: -41.221477,
      lng: 174.827878,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    },
    { id: 10,
      title: 'Vogelmorn Park',
      lat: -41.313737,
      lng: 174.764399,
      description: 'A sports ground in Wellington, where kids play football on the weekend.',
      openingHours: {
          saturday: 'Saturday: 7am - 5pm',
          sunday: 'Sunday: 8am - 4pm'
      }
    }

];

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -41.286461, lng: 174.776230},
      zoom: 12,
      // draggable: false,
      // zoomControl: false,

      styles: [
        {
            featureType: 'water',
            stylers: [
                { color: '#abeefc' }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                  { color: '#eda72f' }
              ]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#e0695e'}]
            },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#61c454'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#888e87'}]
        },
        {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill',
            stylers: [
                {color: '#ffbb00'}
              ]
        },
        {
            featureType: 'transit',
            elementType: 'geometry.fill',
            stylers: [
                {color: '#56a82a'}
              ]
        }
      ]
    });

    //Need to declare marker AFTER declaring the map (otherwise it'll be undefiined)

    for (var i = 0; i < allMarkers.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: allMarkers[i].lat,
                lng: allMarkers[i].lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'images/redmarker.png',
            markerTitle: allMarkers[i].title,
            markerID: allMarkers[i].id
        });
        addClickEventToMarker(marker);
    };

    var infobox;
    var firstMarker;
    var secondMarker;

    function addClickEventToMarker(singleMarker){
        if(infobox){
            infobox.close();
        }
        infobox = new google.maps.InfoWindow();
        google.maps.event.addListener(singleMarker, 'click', function(){
            console.log('Position is ' + singleMarker.position);
            infobox.setContent('<div><h3>'+singleMarker.markerTitle+'</h3></div>');
            infobox.open(map, singleMarker);


            for (var i = 0; i < allMarkers.length; i++) {
                if (allMarkers[i].id === singleMarker.markerID) {
                    var markerSingle = allMarkers[i];
                    break;
                }
            }

            $('#details').show();
            $('#details').find('h2').text(markerSingle['title']);
            $('#details').find('p').text(markerSingle['description']);
            $('#sat').text(markerSingle['openingHours']['saturday']);
            $('#sun').text(markerSingle['openingHours']['sunday']);


            if(markerSingle.icon === 'images/redmarker.png'){
                markerSingle.setIcon('images/bluemarker.png');
                markerSingle = firstMarker;
                console.log(firstMarker.icon);
            }

            singleMarker.setIcon('images/bluemarker.png');

        });
    };
};

google.maps.event.addDomListener(window, 'load', initMap);


// 10 FOOTBALL GROUNDS IN WELLINGTON CITY
// Alex Moore Park {lat: -41.225309, lng: 174.801646}
// Churton Park {lat: -41.208807, lng: 174.804183}
// Grenada North Park {lat: -41.187026, lng: 174.839096}
// Ian Galloway Park {lat: -41.278796, lng: 174.754900}
// Karori Park {lat: -41.285854, lng: 174.724048}
// Macalister Park {lat: -41.314663, lng: 174.773098}
// Nairnville Park {lat: -41.249949, lng: 174.785204}
// Newtown Park {lat: -41.320935, lng: 174.782962}
// Pinkerton Park {lat: -41.221477, lng: 174.827878}
// Vogelmorn Park {lat: -41.313737, lng: 174.764399}
