var recipes = {
  eggs: 2,
  sugar: '3 cups',
  mayo: '1 tspn'
}

function updateObjectWithKeyAndValue (object,key,value){
  Object.assign({},object,{[key]:value})
}