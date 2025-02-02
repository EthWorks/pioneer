import { BN_TEN } from '@polkadot/util'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import { MyApplications } from '../../../src/app/pages/WorkingGroups/MyApplications'
import { Block } from '../../../src/common/types'
import { WorkingGroupApplication } from '../../../src/working-groups/types/WorkingGroupApplication'

let mockApplications: { isLoading: boolean; applications: WorkingGroupApplication[] }

jest.mock('../../../src/working-groups/hooks/useMyApplications', () => ({
  useMyApplications: () => mockApplications,
}))

const block: Block = {
  number: 1,
  network: 'BABYLON',
  timestamp: '2021-03-09T10:38:04.155Z',
}

const currentApplication: WorkingGroupApplication = {
  id: '1',
  runtimeId: 1,
  opening: {
    id: '2',
    type: 'LEAD',
    groupName: 'Storage',
    groupId: 'storageWorkingGroup',
    rewardPerBlock: BN_TEN,
  },
  createdAtBlock: block,
  status: 'ApplicationStatusPending',
  stakingAccount: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
}

const pastApplication: WorkingGroupApplication = {
  id: '2',
  runtimeId: 2,
  opening: {
    id: '2',
    type: 'REGULAR',
    groupName: 'Forum',
    groupId: 'forumWorkingGroup',
    rewardPerBlock: BN_TEN,
  },
  createdAtBlock: block,
  status: 'ApplicationStatusRejected',
  stakingAccount: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
}

describe('UI: MyApplications', () => {
  beforeEach(() => {
    mockApplications = {
      isLoading: false,
      applications: [],
    }
  })

  it('Still loading', () => {
    mockApplications.isLoading = true
    renderPage()

    expect(screen.getByText('Loading...')).toBeDefined()
    expect(screen.queryByText(/no applications found/i)).toBeNull()

    expect(screen.queryByText(/current applications/i)).toBeNull()
    expect(screen.queryByText(/past applications/i)).toBeNull()
  })

  it('No applications', async () => {
    renderPage()

    expect(screen.getByText(/no applications found/i)).toBeDefined()
    expect(screen.queryByText('Loading...')).toBeNull()

    expect(screen.queryByText(/current applications/i)).toBeNull()
    expect(screen.queryByText(/past applications/i)).toBeNull()
  })

  it('Current applications only', () => {
    mockApplications.applications.push(currentApplication)
    renderPage()

    expect(screen.queryByText('Loading...')).toBeNull()
    expect(screen.queryByText(/no applications found/i)).toBeNull()

    expect(screen.getByText(/current applications/i)).toBeDefined()
    expect(screen.getByText(/storage lead/i)).toBeDefined()
    expect(screen.queryByText(/past applications/i)).toBeNull()
  })

  it('Past applications only', () => {
    mockApplications.applications.push(pastApplication)
    renderPage()

    expect(screen.queryByText('Loading...')).toBeNull()
    expect(screen.queryByText(/no applications found/i)).toBeNull()

    expect(screen.getByText(/past applications/i)).toBeDefined()
    expect(screen.getByText(/forum worker/i)).toBeDefined()
    expect(screen.queryByText(/current applications/i)).toBeNull()
  })

  it('Both current and past applications', () => {
    mockApplications.applications.push(currentApplication)
    mockApplications.applications.push(pastApplication)
    renderPage()

    expect(screen.queryByText('Loading...')).toBeNull()
    expect(screen.queryByText(/no applications found/i)).toBeNull()

    expect(screen.getByText(/current applications/i)).toBeDefined()
    expect(screen.getByText(/storage lead/i)).toBeDefined()
    expect(screen.getByText(/past applications/i)).toBeDefined()
    expect(screen.getByText(/forum worker/i)).toBeDefined()
  })

  function renderPage() {
    return render(
      <HashRouter>
        <MyApplications />
      </HashRouter>
    )
  }
})
