function GFDA(){  
  return {
    both: function(){
      return this._getRequest("both");
    },
    his: function(){
      return this._getRequest("his");
    },
    hers: function(){
      return this._getRequest("hers");
    },
    _getRequest: function(gender){
      var xhr = Ti.Network.createHTTPClient();
      xhr.open("GET","http://goodfuckingdatingadvice.com/"+ gender +".json", false);
      xhr.send();
      
      return JSON.parse(xhr.responseText).tip.body;
    }
  };
}


