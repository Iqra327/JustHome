import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button';

const SignIn = () => {
  return (
    <div className='bg-sky-950 container sm:rounded-2xl mt-20'>
      <div className='w-full max-w-5xl m-auto grid grid-cols-2 max-sm:grid-cols-1 items-center justify-between py-20 max-sm:py-14 px-3 gap-y-6'>
        <div className='text-white flex flex-col gap-2'>
          <h3 className='font-medium text-2xl'>
            Sign in to streamline your search
          </h3>
          <p className='text-[17px] tracking-wide'>
            Save properties, create alerts and keep track of the enquiries you send to agents.
          </p>
        </div>
        <div className='sm:ms-auto'>
          <Link to='/login'>
            <Button 
              text='Sign in or creat an account'
              icon={<LiaLongArrowAltRightSolid />}
              className='bg-[#D97706]'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn