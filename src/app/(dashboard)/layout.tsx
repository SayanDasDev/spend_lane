import SideBar from '@/components/shared/side-bar';
import TopBar from '@/components/shared/top-bar';
import React from 'react'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='relative grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] text-primary'>
      <SideBar />
      <div className="flex flex-col">
        <TopBar />
        <div className='pt-14'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
