import {BsFillCalculatorFill} from 'react-icons/bs'
import {HiReceiptTax} from 'react-icons/hi'
import {GiCash} from 'react-icons/gi'
import {MdOutlineAppRegistration} from 'react-icons/md'
export const serviceOfferDatas = [
    {
        id:'1',
        header:'Accounting',
        content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        icon: <BsFillCalculatorFill className='text-[#e6e6e6] text-5xl md:text-5xl lg:text-8xl'/>
    },
    {
        id:'2',
        header:'Tax, Compliance & Payroll',
        content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        icon: <HiReceiptTax className='text-[#e6e6e6] text-5xl md:text-5xl lg:text-8xl'/>

    },
    {
        id:'3',
        header:'Financial Services',
        content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        icon: <GiCash className='text-[#e6e6e6] text-5xl md:text-5xl lg:text-8xl'/>

    },
    {
        id:'4',
        header:'CAC Registration',
        content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        icon: <MdOutlineAppRegistration className='text-[#e6e6e6] text-5xl md:text-5xl lg:text-8xl'/>

    }
]