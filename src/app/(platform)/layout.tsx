"use client"

import React from 'react'
import { SideNavRailWHeader } from './_components/SideNavRailWHeader'
import { Stack, Theme } from '@carbon/react'

export default function Platformlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <Theme theme="g90">
          <SideNavRailWHeader />
        </Theme>
        <Stack className='p-24'>
          {children}
        </Stack>
    </div>
  )
}