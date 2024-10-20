import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import BankCard from './bank-card';

const RightSidebar = (props: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-blue-500'>{props.user.firstName[0]}</span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>{props.user.firstName} {props.user.lastName}</h1>
            <p className='profile-email'>{props.user.email}</p>
          </div>
        </div>
      </section>
      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>My Banks</h2>
          <Link href="/" className='flex gap-2'>
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt='plus'
            />
            <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
          </Link>
        </div>
        {props.banks?.length > 0 &&
          <div className='relative flex-1 flex-col items-centre justify-centre gap-5'>
            <div className='relative'>
              <BankCard
                key={props.banks[0].$id}
                account={props.banks[0]}
                userName={`${props.user.firstName} ${props.user.lastName}`}
                showBalance={false}
              />
            </div>
            {props.banks[1] &&
              <div className='absolute right-0 top-8 z-0 w-[90%]'>
                <BankCard
                  key={props.banks[1].$id}
                  account={props.banks[1]}
                  userName={`${props.user.firstName} ${props.user.lastName}`}
                  showBalance={false}
                />
              </div>}
          </div>}
      </section>
    </aside>
  )
}

export default RightSidebar;