import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const Contact = () => {
    // const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            formData.append("access_key", "4ba1c3a4-e6a4-462a-9d52-34123bbc0994");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            // setResult(data.success ? "Success!" : "Error");
            if(data.success){
                toast.success("Thanks For Your Submission !");
                event.target.reset();
            }
            else{
                toast.error("There Are Some Error !")
            }
        }
        catch{
            toast.error("There Are Some Error !");
        }
        
    };
    return (
        <div id='contact' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title="Reach Out To Us" desc="From strategy to execution, we craft digital solutions that move your business forward."></Title>
            <form action="" className='grid sm:grid-cols-2 gap-2 sm:gap-5 max-w-2xl w-full ' onSubmit={(e)=>onSubmit(e)}>
                <div className=''>
                    <p className='mb-2 text-sm font-medium'>Your Name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='Enter Your Name...' className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>
                <div className=''>
                    <p className='mb-2 text-sm font-medium'>Email Id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="email" placeholder='Enter Your Mail...' className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea required name="message" id="" rows={8} placeholder='Enter Your Message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'></textarea>
                </div>
                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>

            </form>
        </div>
    )
}

export default Contact