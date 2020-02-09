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
  $.ajax(
    {
      // url: 'http://ctabustracker.com/bustime/api/v2/getvehicles?key=ySBXDn8J2axRZgjHsVfp3CquD&vid=6438,1295&tmres=s&format=json',
      url: url,
      success: (data) => {
        console.log(data);
         // console.log(data['bustime-response'].vehicle[0].vid);
      },
      // headers: {"X-My-Custom-Header": "some value"}
    }
  )
})
// rt=20&dir=East%20Bound&format=json
// &rt=20&dir=East%20Bound&format=json
