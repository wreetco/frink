/*
  * wreetco Frink analytics tracking script
*/

var w_frink = w_frink || {};

/*
  * the tools professor frink needs to do his job
*/
w_frink.tools = {
  makeNewId: function() {
    /*
      * we need a string that we can at least be semi-sure will generate
      * a unique ID for us to reference in the DB.
    */
    return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = (c == 'x' ? r : (r&0x3|0x8));
      return v.toString(16);
    });
  }, // end makeNewId method

  httpReq: function(method, params, callback) {
    /*
      * we need to connect to wreetco endpoints
    */

  } // end httpReq method

};

/*
  * some of the tracking things the professor likes to deploy
*/
w_frink.tracking = {

};
