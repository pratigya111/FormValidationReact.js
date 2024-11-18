
import './App.css';
import { useForm } from "react-hook-form";
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
   } = useForm();
   function onSubmit (data) {
    console.log("submitting the form",data);
   }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >First Name: </label>
        <input {...register( 'firstname', {required:true} )} />
      </div>
      <br/>
      <div>
        <label >Middle Name:</label>
        <input {...register( 'middlename', {required:true} )} />
      </div>
      <br/>
      <div>
        <label >Last Name:</label>
        <input {...register( 'lastname', {required:true} )} />
      </div>
      <br/>
      <input type="submit" />
    </form>
  );
}

export default App;
