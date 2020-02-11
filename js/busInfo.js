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
          let length = data['bustime-response'].routes.length
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
    const unique = "getstops"
    const bustimeResponse = 'bustime-response'
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
            $stopsFilter = $('<div class="stops-query">')
            // $filterButton = $('<input type="text" id="stop-filter" name="" value="" placeholder="Enter a Route">')

            for(let i = 0; i < length; i++) {
              const stopName = data['bustime-response'].stops[i].stpnm
              const stopId = data['bustime-response'].stops[i].stpid
              const $card = $(`<div class='card'>`)
              const $nameH3 = $(`<h3>Stop Name: ${stopName}</h3></div>`)
              const $idH3 = $(`<h3>Stop Id: ${stopId}</h3></div>`)
              $card.append($nameH3).append($idH3)
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