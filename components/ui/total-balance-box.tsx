'use client';

import React from 'react'
import AnimatedCounter from './animated-counter'
import DoughnutChart from './doughunt-chart'

const TotalBalanceBox = (props: TotalBalanceBoxProps) => {
    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
                <DoughnutChart accounts={props.accounts}/>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>
                    Bank Accounts: {props.totalBanks}
                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='total-balance-label'>
                        Total Current Balance:
                    </p>
                    <div className='total-balance-amount flex-centre gap-2'>
                        <AnimatedCounter amount={props.totalCurrentBalance}  />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox