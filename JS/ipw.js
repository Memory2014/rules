
if ($response.statusCode != 200) {
  $done(null);
} else {
  var body = $response.body;
  var obj = JSON.parse(body);
  var title = obj['country_code'] + ' ' + obj['city'];
  var subtitle = obj['country'] + ' ' + obj['isp'];
  var ip = obj['ip'];
  var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['org'] + '\n' + obj['ip'];

  $done({title, subtitle, ip, description});
}