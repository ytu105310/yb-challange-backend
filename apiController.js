var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var axios = require("axios");
var convert = require('xml-js');

class ApiController {
	constructor() {

	}

	test() {
    axios.get('http://api.sfl.ch/xml/teamdetail/hash/df323763af6c70ccc39545bc6f50fdc5/teamxid/52591/')
  .then(function (response) {
    var json = convert.xml2json(response.data, {compact: true, spaces: 4});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

module.exports = ApiController;

// // // Get every player from YB
// // function getEveryYBPlayer() {
//   request('http://api.sfl.ch/xml/teamdetail/hash/df323763af6c70ccc39545bc6f50fdc5/teamxid/52591/', (error, response, body) => {
//   const xml = response.body;
//   players = xml.getElementsByTagName('player');
//   console.log(players);
// })
// // }