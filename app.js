$(() => {
  // Base url to be used in all request to the API
  const url = 'http://ctabustracker.com/bustime/api/v2/'
  // API key
  const key = 'ySBXDn8J2axRZgjHsVfp3CquD'
  //////////////////////////////////////////
  // Routes: unique = getstops,
  // args = `&rt=${route}&dir=${direction}&format=json`
  // Get stop information for a given Route.
  // Takes an alphanumeric designator of the route (required) and
  // the direction (eg Northbound, required) and returns
  // [name,stop id, longitude, latitude, ...] for all
  // stops on the given route
  $('.button').on('click', (event) => {
    const unique = "getstops"
    const bustimeResponse = 'bustime-response'
    let route = $('input[id="route-input"]').val()
    let direction = $('input[id="direction-input"]').val()
    let args = `&rt=${route}&dir=${direction}&format=json`

    //clear fields
    route = $('input[id="route-input"]').val("")
direction = $('input[id="direction-input"]').val("")
    $.ajax(
      {
        url: url + `${unique}?key=${key}&rt=${args}`,
        success: (data) => {
          const length = data['bustime-response'].stops.length
          console.log(data['bustime-response'].stops[0]);
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
  // Routes: unique = getroutes, args = null
  //////////////////////////////////////////
  // Directions: unique = getdirections ,
  // args = &rt=${route}&stpid=${stopId}&format=json
  //////////////////////////////////////////
  // Predictions: unique = getpredictions, args = &rt=${route}&format=json
  //////////////////////////////////////////


})
