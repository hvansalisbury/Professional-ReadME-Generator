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

function renderTitle(title) {
  if (title === '') {
    console.log('A title is required')
    return ''
  } else {
    return `# ${title}\n`
  }
}

function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `\n[![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-purple)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})\n`
  }
}

function renderDescription(description) {
  if (description === '') {
    console.log('A description is required')
    return ''
  } else {
    return `\n## Description\n\n${description}\n`
  }
}

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

function renderInstallation(installation) {
  if (installation === '') {
    return ''
  } else {
    return `\n## Installation\n\n${installation}\n`
  }
}

function renderUsage(usage) {
  if (usage === '') {
    console.log('Usage is required')
    return ''
  } else {
    return `\n## Usage\n\n${usage}\n`
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `\n## License\n\n[![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-purple)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})\n\nThis application is covered under the [${license}](https://choosealicense.com/licenses/${licenseInfo[license]['url']}) license.\n`
  }
}

function renderContributing(contributing) {
  if (contributing === '') {
    return `\n## Contributing\n\nAt this time, I am not looking for any additional contributors for this project.\n`
  } else {
    return `\n## Contributing\n\n${contributing}\n`
  }
}

function renderTests(tests) {
  if (tests === '') {
    return ''
  } else {
    return `\n## Tests\n\n${tests}\n`
  }
}

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

function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = data;
  console.log(data.title)
  console.log(data.description)
  console.log(data.installation)
  console.log(data.usage)
  console.log(data.license)
  console.log(data.contributing)
  console.log(data.tests)
  console.log(data.githubUsername)
  console.log(data.email)
  if (data.title === '' || data.description === '' || data.usage === '') {
    console.log('Title, Description, Usage and either a Github username or an email is required.')
    return ''
  } else if (data.githubUsername === '' && data.email === '') {
    console.log('Please submit a Github username or an email.')
    return ''
  } else {
  return `${renderTitle(data.title)}${renderLicenseBadge(data.license)}${renderDescription(data.description)}${renderTOC(data.installation, data.usage, data.license, data.contributing, data.tests, data.githubUsername, data.email)}${renderInstallation(data.installation)}${renderUsage(data.usage)}${renderLicenseSection(data.license)}${renderContributing(data.contributing)}${renderTests(data.tests)}${renderQuestions(data.githubUsername, data.email)}`
}}

module.exports = generateMarkdown;