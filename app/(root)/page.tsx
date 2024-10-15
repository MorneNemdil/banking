import HeaderBox from '@/components/ui/header-box';
import TotalBalanceBox from '@/components/ui/total-balance-box';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Morne' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title={'Welcome'}
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.25}
          />
        </header>
      </div>
    </section>
  )
}

export default Home