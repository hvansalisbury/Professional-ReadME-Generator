const licenseInfo = {
  'None': {badge: '', url: ''},
  'Apache License 2.0': {badge:'Apache_License_2.0', url:'apache-2.0'},
  'GNU General Public License v3.0': {badge: 'GNU_General_Public_License_v3.0', url: 'gpl-3.0'},
  'MIT License': {badge: 'MIT_License', url: 'mit'},
  'BSD 2-Clause "Simplified" License': {badge: 'BSD_2--Clause_"Simplified"_License', url: 'bsd-2-clause'},
  'BSD 3-Clause "New" or "Revised" License': {badge: 'BSD_3--Clause_"New"_or_"Revised"_License', url: 'bsd-3-clause'},
  'Boost Software License 1.0': {badge: 'Boost_Software_License_1.0', url: 'bsl-1.0'},
  'Creative Commons Zero v1.0 Universal': {badge: 'Creative_Commons_Zero_v1.0_Universal', url: 'cc0-1.0'},
  'Eclipse Public License 2.0': {badge: 'Eclipse_Public_License_2.0', url: 'epl-2.0'},
  'GNU Affero General Public License v3.0': {badge: 'GNU_Affero_General_Public_License_v3.0', url: 'agpl-3.0'},
  'GNU General Public License v2.0': {badge: 'GNU_General_Public_License_v2.0', url: 'gpl-2.0'},
  'GNU Lesser General Public License v2.1': {badge: 'GNU_Lesser_General_Public_License_v2.1', url: 'lgpl-2.1'},
  'Mozilla Public License 2.0': {badge: 'Mozilla_Public_License_2.0', url: 'mpl-2.0'},
  'The Unlicense': {badge: 'The_Unlicense', url: 'unlicense'}
}

console.log(licenseInfo['Apache License 2.0']['badge'])

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    '';
  } else {
 return `
 [![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-orange)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})
    
  `
 }}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    '';
  } else {
    return `
  - [License](#license)`
  }
}

function renderTOC(installation, usage, license, contributing, tests, githubUsername, email) {
if (installation !== '') {
  var installTOC = '- [Installation](#installation)'
}
if (usage !== '') {
  var usageTOC = '- [Usage](#usage)'
} else {
  usageTOC = ''
}
if (license !== 'None') {
  var licenseTOC = '- [License](#license)'
} else {
  licenseTOC = ''
}
if (contributing !== '') {
  var contributingTOC = '- [Contributing](#contributing)'
} else {
  contributingTOC = ''
}
if (tests !== '') {
  var testsTOC = '- [Tests](#tests)'
} else {
  testsTOC = ''
}
if (githubUsername !== '' || email !== '') {
  var questionsTOC = '- [Questions](#questions)'
} else {
  questionsTOC = ''
}
return `
## Table of Contents

${installTOC}
${usageTOC}
${licenseTOC}
${contributingTOC}
${testsTOC}
${questionsTOC}
`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    '';
  } else {
 return `
 ## License

  [![badge](https://img.shields.io/badge/license-${licenseInfo[license]['badge']}-orange)](https://choosealicense.com/licenses/${licenseInfo[license]['url']})

  This application is covered under the [${license}](https://choosealicense.com/licenses/${licenseInfo[license]['url']}) license.
  `
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = data;
  console.log(data.usage)
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}

  ${renderTOC(data.installation, data.usage, data.license, data.contributing, data.tests, data.githubUsername, data.email)}

  // ## Table of Contents
    
  // - [Installation](#installation)
  // - [Usage](#usage)${renderLicenseLink(license)}
  // - [Contributing](#contributing)
  // - [Tests](#tests)
  // - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  
  If you have any questions, please email me at ${data.email} and reach out to me on my [Github Profile](https://github.com/${data.githubUsername}) 
`
}

module.exports = generateMarkdown;