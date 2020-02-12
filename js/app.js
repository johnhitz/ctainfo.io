$(() => {
  // Base url to bes used in all request to the API
  // event.stopPropagation()
  const url = 'http://ctabustracker.com/bustime/api/v2/'
  // API key
  const key = 'ySBXDn8J2axRZgjHsVfp3CquD'
  $('#header').load('header.html')
  //////////////////////////////////////////
  // Routes: unique = getroutes, parameters = format
  $('.routes').on('click', (event) => {
    event.preventDefault()
    // event.stopPropagation()
    const unique = `getroutes`
    const args = `&format=json`
    $.ajax(
      {
        url: url + `${unique}?key=${key}&rt=${args}`,
        success: (data) => {
          event.preventDefault()
          // defined length to preserve for-loop readability
          let length = data['bustime-response'].routes.length
          // define hide button to provide hide
          // funcionality for route data if requested
          $hideBtn = $('<input type="button" id="routes" class="button routes hide-routes" name="" value="Toggle Routes">')
          // console.log($hideBtn);
          $('#routes').after($hideBtn)
          $('#routes').remove()
          $hideBtn.on('click', (event) => {
            event.preventDefault()
            if($('div.routes').hasClass('hidden') === false) {
              // Why can't I do:
              // $hideBtn.text('Hide Button')
              $('div.routes').addClass('hidden')
            } else {
              $('div.routes').removeClass('hidden')
              // and
              // $hideBtn.text('Show Button')
              // in my if statement?
            }
          })
          for(let i = 0; i < length; i++) {
            const $rtnm = data['bustime-response'].routes[i].rtnm
            const $rt = data['bustime-response'].routes[i].rt
            const $color = data['bustime-response'].routes[i].rtclr
            const $card = $(`<div class='card'>`)
            const $nameH3 = $(`<h3>Route Name: ${$rtnm}</h3></div>`)
            const $rtH3 = $(`<h3>Route Number: ${$rt}</h3></div>`)
            $card.append($nameH3).append($rtH3)
            $card.css('background-color', $color)
            $('.routes').append($card)
          }
          // console.log(data['bustime-response'].routes[0]);
        }
      }
    )
  })
  //////////////////////////////////////////
  // Routes: unique = getstops,
  // args = `&rt=${route}&dir=${direction}&format=json`
  // Get stop information for a given Route.
  // Takes an alphanumeric designator of the route (required)
  // and the direction (eg Northbound, required) and returns
  // [name,stop id, longitude, latitude, ...] for all
  // stops on the given route
  $('.stops').on('click', (event) => {
    // event.preventDefault()
    $('.card').remove()
    const unique = "getstops"
    let route = $('input[id="route-input"]').val()
    let direction = $('input[id="direction-input"]').val()
    let args = `&rt=${route}&dir=${direction}&format=json`

    //clear fields
    route = $('input[id="route-input"]').val("")
    direction = $('input[id="direction-input"]').val("")
    // Need to use event.currentTarget?????
      $.ajax(
        {
          url: url + `${unique}?key=${key}&rt=${args}`,
          success: (data) => {
            event.preventDefault()
            const length = data['bustime-response'].stops.length
            // $stopsFilter = $('<div class="stops-query">')
            // $filterButton = $('<input type="text" id="stop-filter" name="" value="" placeholder="Enter a Route">')
            // $div = $('<div>').css({'background-color': 'red', 'height': '2px', 'width': '2px'})
            // console.log($div);
            // $('.stops-query').after($div);
            // $('.stops-query').css('background', 'red')
            // $('.stops-query').append($div)
            // Able to change background color but not add append div with after() or append()
            // ???????????????????????????????
            console.log(data['bustime-response'].stops[0]);
            for(let i = 0; i < length; i++) {
              const stopName = data['bustime-response'].stops[i].stpnm
              const stopId = data['bustime-response'].stops[i].stpid
              const lat = data['bustime-response'].stops[i].lat
              const lon = data['bustime-response'].stops[i].lon
              const $card = $(`<div class='card'>`)
              const $nameH3 = $(`<h3>Stop Name: ${stopName}</h3></div>`)
              const $idH3 = $(`<h3>Stop Id: ${stopId}</h3></div>`)
              const $latH3 = $(`<h3>Latitude: ${lat}</h3></div>`)
              const $lonH3 = $(`<h3>Longitude: ${lon}</h3></div>`)
              $card.append($nameH3).append($idH3).append($latH3).append($lonH3)
              $('.stops').append($card)
            }
          },
        }
      )
  })


  //////////////////////////////////////////
  // Directions: unique = getdirections ,
  // args = &rt=${route}&stpid=${stopId}&format=json
  //////////////////////////////////////////
  // Predictions: unique = getpredictions, args = &rt=${route}&format=json
  //////////////////////////////////////////


})
