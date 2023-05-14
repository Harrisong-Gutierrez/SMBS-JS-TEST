import { useForm } from "../Hooks/useForm"


const initialForm = {
  name:"",
  lastname:"",
  email:"",
  password:"",
  comment:"",
}

const validationsForm = (form ,dataToEdit) => {

   let errors = {};

   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexLast = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   let regexComments = /^.{1,50}$/



   if(!form.name.trim()) {
    errors.name = "The Name field is required"
   } else if (!regexName.test(form.name.trim())) {
    errors.name = "The Name Field only accepts letters and blank spaces";
   };



   if(!form.lastname.trim()) {
    errors.lastname = "The Lastname field is required"
   }else if (!regexLast.test(form.lastname.trim())) {
    errors.lastname = "The  Last 'Name' Field only accepts letters and blank spaces";
   };



   if(!form.email.trim()) {
    errors.email = "The Email field is required"
   }else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The 'email' you provided is  not Correct.";
   };



   if(!form.password.trim()) {
    errors.password = "The Password field is required"
   }else if (!regexPassword.test(form.password.trim())) {
    errors.password = "The 'password' must have a minimum length of 6 characters, and contain at least one lowercase letter, one uppercase letter and one digit";
   };



   if(!form.comment.trim()) {
    errors.comment = "The Comment field is required"
   }else if (!regexComments.test(form.comment.trim())) {
    errors.comment = "The text entered in the 'comment' field must not exceed 50 characters";
   };



   return errors;
}

//


//  

const CrudForm = () => {
  const {
    form,
    errors,
    handleReset,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  
  return (
    
    <div className='mr-10 ml-10 flex  mt-7 mb-7  justify-center'>
    

    <div className='w-full max-w-3xl bg-gray-300 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
    <div id='cartel' className='flex justify-center mt-2'>
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enter customer data in the text box</button>
    </div>

    <form onSubmit={handleSubmit} className=''>

        <div className="ml-5 mr-5 mb-6 mt-5 ">
        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" name='name' onChange={handleChange} onBlur={handleBlur} value={form.name}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='Name' required />
        {errors.name && 
          
           <div class="flex p-1 mb-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
           <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
           <span class="sr-only">Info</span>
           <div><span class="font-medium">Danger alert!  </span>{errors.name}</div></div>}
      
        </div>

        <div className="ml-5 mr-5 mb-6">
        <label htmlFor="Last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
        <input type="text" name='lastname' onChange={handleChange} onBlur={handleBlur} value={form.lastname}  placeholder='Last name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>

        {errors.lastname && 
          
          <div class="flex p-1 mb-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div><span class="font-medium">Danger alert!  </span>{errors.lastname}</div></div>}

        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="E-mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
        <input type="email" name='email' onChange={handleChange}  onBlur={handleBlur} value={form.email}  placeholder='e-mail'   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        {errors.email && 
          
          <div class="flex p-1 mb-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div><span class="font-medium">Danger alert!  </span>{errors.email}</div></div>}


        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="text" name='password' onChange={handleChange}  onBlur={handleBlur} value={form.password} placeholder='Password'   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        {errors.password && 
          
          <div class="flex p-1 mb-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div><span class="font-medium">Danger alert!  </span>{errors.password}</div></div>}


        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="Comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
        <textarea type="text" name='comment' onChange={handleChange} onBlur={handleBlur} value={form.comment}  placeholder='Comment'   className="bg-gray-50 border max-h-52  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        {errors.comment && 
          
          <div class="flex p-1 mb-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div><span class="font-medium">Danger alert!  </span>{errors.comment}</div></div>}



        </div>

        



       <div className='mb-4 text-center'>
       <input  type="submit"  value="Enviar"  className="mr-1  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"/>
        <input type="reset" value="Limpiar"  onClick={handleReset}  className="ml-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2" />
       </div>
    </form>
    </div>


    </div>
    
  )
}

export default CrudForm

