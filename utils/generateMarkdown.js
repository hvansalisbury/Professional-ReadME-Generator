// object of the licenses, and the proper syntax to generate the badges and link to the license on choosealicense.com
const licenseInfo = {
  'None': { badge: '', url: '' },
  'Apache License 2.0': { badge: 'Apache_License_2.0', url: 'apache-2.0' },
  'GNU General Public License v3.0': { badge: 'GNU_General_Public_License_v3.0', url: 'gpl-3.0' },
  'MIT License': { badge: 'MIT_License', url: 'mit' },
  'BSD 2-Clause "Simplified" License': { badge: 'BSD_2--Clause_"Simplified"_License', url: 'bsd-2-clause' },
  'BSD 3-Clause "New" or "Revised" License': { badge: 'BSD_3--Clause_"New"_or_"Revised"_License', url: 'bsd-3-clause' },
  'Boost Software License 1.0': { badge: 'Boost_Software_License_1.0', url: 'bsl-1.0' },
  'Creative Commons Zero v1.0 Universal': { badge: 'Creative_Commons_Zero_v1.0_Universal', url: 'cc0-1.0' },
  'Eclipse Public License 2.0': { badge: 'Eclipse_Public_License_2.0', url: 'epl-2.0' },
  'GNU Affero General Public License v3.0': { badge: 'GNU_Affero_General_Public_License_v3.0', url: 'agpl-3.0' },
  'GNU General Public License v2.0': { badge: 'GNU_General_Public_License_v2.0', url: 'gpl-2.0' },
  'GNU Lesser General Public License v2.1': { badge: 'GNU_Lesser_General_Public_License_v2.1', url: 'lgpl-2.1' },
  'Mozilla Public License 2.0': { badge: 'Mozilla_Public_License_2.0', url: 'mpl-2.0' },
  'The Unlicense': { badge: 'The_Unlicense', url: 'unlicense' }
}
// the following functions are used to generate the content for each section, if blank, it returns an empty string
// function to render title section
function renderTitle(title) {
  if (title === '') {
    console.log('A title is required')
    return ''
  } else {
    return `# ${title}\n`
  }
}
// function to render a badge for the license
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `\n[![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-purple)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})\n`
  }
}
// function to render description section
function renderDescription(description) {
  if (description === '') {
    console.log('A description is required')
    return ''
  } else {
    return `\n## Description\n\n${description}\n`
  }
}
// function to render table of contents
function renderTOC(installation, usage, license, contributing, tests, githubUsername, email) {
  if (installation === '') {
    var installTOC = ''
  } else {
    installTOC = '\n- [Installation](#installation)'
  }
  if (usage === '') {
    var usageTOC = ''
  } else {
    usageTOC = '\n- [Usage](#usage)'
  }
  if (license === 'None') {
    var licenseTOC = ''
  } else {
    licenseTOC = '\n- [License](#license)'
  }
  if (contributing === '') {
    var contributingTOC = ''
  } else {
    contributingTOC = '\n- [Contributing](#contributing)'
  }
  if (tests === '') {
    var testsTOC = ''
  } else {
    testsTOC = '\n- [Tests](#tests)'
  }
  if (githubUsername === '' && email === '') {
    var questionsTOC = ''
  } else {
    questionsTOC = '\n- [Questions](#questions)'
  }
  return `\n## Table of Contents\n${installTOC}${usageTOC}${licenseTOC}${contributingTOC}${testsTOC}${questionsTOC}\n`
}
// function to render installation section
function renderInstallation(installation) {
  if (installation === '') {
    return ''
  } else {
    return `\n## Installation\n\n${installation}\n`
  }
}
// function to render usage section
function renderUsage(usage) {
  if (usage === '') {
    console.log('Usage is required')
    return ''
  } else {
    return `\n## Usage\n\n${usage}\n`
  }
}
// function to render license section
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `\n## License\n\n[![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-purple)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})\n\nThis application is covered under the [${license}](https://choosealicense.com/licenses/${licenseInfo[license]['url']}) license.\n`
  }
}
// function to render contributing section
function renderContributing(contributing) {
  if (contributing === '') {
    return `\n## Contributing\n\nAt this time, I am not looking for any additional contributors for this project.\n`
  } else {
    return `\n## Contributing\n\n${contributing}\n`
  }
}
// function to render tests section
function renderTests(tests) {
  if (tests === '') {
    return ''
  } else {
    return `\n## Tests\n\n${tests}\n`
  }
}
// function to render questions section
function renderQuestions(githubUsername, email) {
  if (githubUsername !== '' && email !== '') {
    return `\n## Questions\n\nShould you have any questions, please email me at ${email} and reach out to me on my [Github Profile](https://github.com/${githubUsername})\n`
  } else if (githubUsername !== '') {
    return `\n## Questions\n\nShould you have any questions, please reach out to me on my [Github Profile](https://github.com/${githubUsername})\n`
  } else if (email !== '') {
    return `\n## Questions\n\nShould you have any questions, please email me at ${email}.\n`
  } else {
    console.log('A Github username or email is required')
    return ''
  }
}
// this function creates the entire contents of the readme file
// if any of the required fields are missing, the content will be an empty string
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = data;
  if (data.title === '' || data.description === '' || data.usage === '') {
    console.log('Title, Description, Usage and either a Github username or an email is required.')
    return ''
  } else if (data.githubUsername === '' && data.email === '') {
    console.log('Please submit a Github username or an email.')
    return ''
  } else {
  return `${renderTitle(data.title)}${renderLicenseBadge(data.license)}${renderDescription(data.description)}${renderTOC(data.installation, data.usage, data.license, data.contributing, data.tests, data.githubUsername, data.email)}${renderInstallation(data.installation)}${renderUsage(data.usage)}${renderLicenseSection(data.license)}${renderContributing(data.contributing)}${renderTests(data.tests)}${renderQuestions(data.githubUsername, data.email)}`
}}
// links this file to index.js so it can use the outcome of these functions to create the readme file
module.exports = generateMarkdown;