 

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



const CartInfo = ({ loginState }) => {

    return (
        <div id="CartInfo" className="w-full flex flex-col gap-10 bg-white rounded-2xl p-4 basis-1/2 mb-12" >
            <div className="flex flex-col gap-4 ">
            <label className="">نام</label>
            <input  type="text" placeholder="نام" className="bg-gray-100 focus:border border-gray-100 focus:bg-white h-[50px] rounded-2xl w-full overflow-hidden outline-none p-4 text-right" />
            <label className="">نام خانوادگی</label>
            <input  type="text" placeholder="نام خانوادگی" className="bg-gray-100 focus:border border-gray-100 focus:bg-white h-[50px] rounded-2xl w-full overflow-hidden outline-none p-4 text-right" />
            </div>
            <div className="flex flex-col gap-4">
            <label className="">آدرس</label>
            <textarea  type="text" placeholder="آدرس" className="bg-gray-100 focus:border border-gray-100 focus:bg-white h-[100px] rounded-2xl w-full overflow-hidden outline-none p-4 text-right" />
            <label className="">کد پستی</label>
            <input  type="text" placeholder="10 رقم" className="bg-gray-100 focus:border border-gray-100 focus:bg-white h-[50px] rounded-2xl w-full overflow-hidden outline-none p-4 text-right" />
            </div>
            <div className="flex flex-col gap-2 ">
            <label>روش ارسال</label>
            <select className="bg-gray-100 overflow-none focus:bg-white h-[50px] w-full  rounded-2xl p-2 focus:border border-gray-100 ">
                <option >
                    پست
                </option>
                
            </select>
            
            </div>
            <button type="button" className="h-[50px] rounded-2xl bg-lime-700 text-white text-lg fixed bottom-2 w-[86%] self-center">پرداخت</button>
 
        </div>


    )
}

export default CartInfo