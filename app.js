console.log($);
$(() => {
  // let unique = "getroutes"
  // let args = '&rt=2&format=json'
  let unique = "getstops"
  let args = '&rt=3&dir=Northbound&format=json'
  // let unique = 'getroutes'
  // let args = '&rt=3&format=json'
  // const url = `http://www.ctabustracker.com/bustime/api/v2/${unique}?key=ySBXDn8J2axRZgjHsVfp3CquD${args}`
  const url = `http://ctabustracker.com/bustime/api/v2/${unique}?key=ySBXDn8J2axRZgjHsVfp3CquD&rt=${args}`
  getStops(3, 'Northbound')

})

const getStops = (route, direction) => {
  const unique = "getstops"
  const bustimeResponse = 'bustime-response'
  let args = `&rt=${route}&dir=${direction}&format=json`
  $.ajax(
    {
      url: `http://ctabustracker.com/bustime/api/v2/${unique}?key=ySBXDn8J2axRZgjHsVfp3CquD&rt=${args}`,
      success: (data) => {
        console.log(data['bustime-response'].stops[0]);
        const length = data['bustime-response'].stops.length
        // console.log(Object.keys(data));
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
};
