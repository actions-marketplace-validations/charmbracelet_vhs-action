import * as intaller from './installer'
import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const version = core.getInput('version', {required: true})
    const bin = await intaller.install(version)
    const path = core.getInput('path', {required: true})

    await exec.exec(`${bin} ${path}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()