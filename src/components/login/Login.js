import { useRef } from "react"
import { Service } from "../API/DefaultAPI"
import toast, { Toaster } from 'react-hot-toast';


const Login = ({ setLogin }) => {

    const phonenumber = useRef()

    const RegisterHandler = () => {
        let phoneNumberRegex = new RegExp('^09[0|1|2|3][0-9]{8}$')
        let result = phoneNumberRegex.test(phonenumber.current.value)
        // console.log(result);
        
        if (!result){
            // setTimeout(() => {
            //     toast.loading()
            // }, 700);
            // toast.error('شماره وارد شده اشتباه است')
            
                
                toast.error('شماره وارد شده اشتباه است',{
                    id: 'clipboard',
                })
                
            
        }else{

            const loading = toast.loading('')
            
            Service("post", { "phone_number": String(phonenumber.current.innerHTML) }).then(res => {
                toast.dismiss(loading)
                if (res.status === 201) {
                    setLogin(true)
                    // toast.dismiss(loading)
                    toast.success('با موفقیت وارد شدید',  {id : loading})
                    
    
                    localStorage.setItem('access',res.access)
                    localStorage.setItem('refresh', res.refresh)
                    localStorage.setItem("access_expiration", res["access_expiration"])
                    localStorage.setItem("refresh_expiration", res["refresh_expiration"])
                }
        
            }).catch((err) => {
                // toast.remove(loading)
                toast.error('خطایی رخ داد دوباره سعی کنید', {id : loading})
                if (err.status === 401){
                    
                    

                }
                
    
            })
            // toast.success('با موفقیت وارد شدید')
            
            
        }

        

    }

    return (

        <div id="loginForm" className=" flex flex-col no-wrap justify-center items-center basis-1/2 w-full p-2 gap-1">
            <div className="flex flex-col w-full gap-1">
                <label className="self-start mb-2 font-[600] text-gray-700 texg-lg" dir="rtl" htmlFor="login_user_name">شماره موبایل</label>
                <input ref={phonenumber} id="login_user_name" type="tel" className="bg-white h-[60px] rounded-2xl w-full  outline-none p-3 text-center mb-1" />
            </div>

            <button type="button" onClick={() => RegisterHandler()} className="mt-6 w-full h-[60px] rounded-2xl bg-sky-800 text-white text-lg">ادامه</button>
        </div>



    )
}

export default Login