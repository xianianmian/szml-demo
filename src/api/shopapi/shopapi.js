import api from '../../utils/http'

export function getAlldata(){
  return api({
    url:'/good/findall',
    method:'GET',
  })
}

export function getOneData(id){
  return api({
    url:'/good/findone/'+id,
    method:'GET'
  })
}

export function addGood(data){
  return api({
    url:'/good/addgood',
    method:'POST',
    data:data
  })
}