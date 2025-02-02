import yargs from 'yargs'

import { eventsModule } from './generateEventMocks'
import { councilModule } from './generators/council/generateCouncils'
import { forumModule } from './generators/forum/generateForumMocks'
import { generateAllEvents } from './generators/generateEvents'
import { generateMembers } from './generators/generateMembers'
import { generateOpeningsAndUpcomingOpenings } from './generators/generateOpeningsAndUpcomingOpenings'
import { generateProposals } from './generators/generateProposals'
import { generateWithdrawnApplications, generateWorkers } from './generators/generateWorkers'
import { generateWorkingGroups, getWorkingGroupsWithLead } from './generators/generateWorkingGroups'
import { Mocks } from './generators/types'
import { saveFile } from './helpers/saveFile'

const main = () => {
  const mocks: Mocks = {
    members: [],
    workingGroups: [],
    openings: [],
    upcomingOpenings: [],
    workers: [],
    applications: [],
    proposals: [],
  }

  mocks.members = generateMembers()
  mocks.workingGroups = generateWorkingGroups()
  Object.assign(mocks, generateOpeningsAndUpcomingOpenings(mocks))
  Object.assign(mocks, generateWorkers(mocks))
  mocks.workingGroups = getWorkingGroupsWithLead(mocks)
  mocks.applications = [...mocks.applications, ...generateWithdrawnApplications(mocks)]
  Object.assign(mocks, generateAllEvents(mocks))
  mocks.proposals = generateProposals(mocks)

  Object.entries(mocks).forEach(([fileName, contents]) => saveFile(fileName, contents))
}

const membersModule = {
  command: 'members',
  describe: 'Generate members',
  handler: () => saveFile('members', generateMembers()),
}

const allModule = {
  command: 'all',
  describe: 'Generate all mocks',
  handler: main,
}

yargs(process.argv.slice(2))
  .usage('yarn query-node-mocks [<command>]')
  .scriptName('')
  .command(allModule)
  .command(membersModule)
  .command(eventsModule)
  .command(forumModule)
  .command(councilModule)
  .demandCommand().argv
