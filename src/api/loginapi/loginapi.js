import api from '../../utils/http'

function Loginapi(userName,password){
  const data = {userName,password}
  return api({
    url:'/user/login',
    method:'POST',
    data:data
  })
}
export default Loginapi