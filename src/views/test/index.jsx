import axios from 'axios';
import { useState } from 'react';
const TestPage = () => {
  const [formData, setFormData] = useState({
    userName: 'dar',
    password: '123456',
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // 防止默认提交行为
    console.log(formData);
    axios.post('http://localhost:9095/user/login', formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log(response);
        // 处理成功响应
      })
      .catch(error => {
        console.log(error);
        // 处理错误响应
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {/* <textarea name="message" value={formData.message} onChange={handleChange}></textarea> */}
      <button type="submit">提交</button>
    </form>
  );
}
export default TestPage