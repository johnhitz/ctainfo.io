$(() => {
  $('.button').on('click', (event) => {
    const unique = "getstops"
    const bustimeResponse = 'bustime-response'
    let route = $('input[id="route-input"]').val()
    let direction = $('input[id="direction-input"]').val()
    let args = `&rt=${route}&dir=${direction}&format=json`
    $.ajax(
      {
        url: `http://ctabustracker.com/bustime/api/v2/${unique}?key=ySBXDn8J2axRZgjHsVfp3CquD&rt=${args}`,
        success: (data) => {
          const length = data['bustime-response'].stops.length
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
})
