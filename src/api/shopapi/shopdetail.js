import api from '../../utils/http'

export function getDetailGoodConversion(id){
  return api({
    url:'/good/get_good_conversion/'+id,
    method:'GET'
  })
}
export function getDetailGoodInformation(id){
  return api({
    url:'/good/get_good_information/' + id,
    method:'GET'
  })
}

export function agreeSubmit(id){
  return api({
    url:'/good/agree_submit/'+id,
    method:'POST',
  })
}
export function editStage(id){
  return api({
    url:'/good/edit_stage/'+id,
    method:'POST',
  })
}
export function rejectSubmit(id){
  return api({
    url:'/good/reject_submit/'+id,
    method:'POST',
  })
}
export function goOnline(id){
  return api({
    url:'/good/go_online/'+id,
    method:'POST',
  })
}