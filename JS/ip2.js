

if ($response.statusCode != 200) {
  $done(null);
} else {
  var body = $response.body;
  var obj = JSON.parse(body);
  var title = obj['country_code'] + ' ' + obj['city_name'];
  var subtitle = obj['country_name'] + ' ' + obj['as'];
  var ip = obj['ip'];
  var description = obj['country_name'] + '\n' + obj['city_name'] + '\n' + obj['as'] + '\n' + obj['ip'];

  $done({title, subtitle, ip, description});
}