console.log($);
$(() => {
  let unique = "getroutes"
  let args = '&rt=2&format=json'
  const url = `http://www.ctabustracker.com/bustime/api/v2/${unique}?key=ySBXDn8J2axRZgjHsVfp3CquD${args}`
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
