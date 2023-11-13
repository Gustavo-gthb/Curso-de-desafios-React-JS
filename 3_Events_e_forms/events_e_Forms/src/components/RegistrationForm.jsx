import { useState } from "react";

function RegistrationForm() {
  const [dataForm, setDataForm] = useState({
    username:'',
    email:'',
    passaword:'',
  });

  const handleChange = (e) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" onChange={handleChange}/>
        </div>
        <div>
          <input type="email" name="email" onChange={handleChange}/>
        </div>
        <div>
          <input type="password" name="password" onChange={handleChange}/>
        </div>

        <button type="submit">Enviar informações</button>
      </form>
    </>
  );
}

export default RegistrationForm;
