// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge;
  
  if (license !== "None"){
    badge = "https://shields.io/badge/license-"+ license + "-green";
  }
  else {
    badge = "";
  }

  return badge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;

  if (license !== "None"){
    if(license === "MIT"){
      link = "https://mit-license.org/";
    }
    if(license === "BSD"){
      link = "https://opensource.org/licenses/BSD-3-Clause";
    }
    if(license === "GPL"){
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    }
    if (license === "Apache"){
      link = "https://www.apache.org/licenses/LICENSE-2.0.html";
    }
  }
  else {
    link = "";
  }

  return link
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  if (license !== "None"){
    licenseSection = renderLicenseLink(license);
  }
  else {
    licenseSection = "";
  };

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badge

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage) 
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [License](#License) 
  7. [Questions](#Questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution 

  ${data.contribution}

  ## Tests

  ${data.test}

  ## License
  This project uses the ${data.license}.
  Go to ${renderLicenseSection(data.license)} to learn more.

  ## Questions 

  You can find me on Github by clicking this link: https://github.com/${data.github}.
  You can also reach out to me by email at: ${data.email}.

  `
};

export default generateMarkdown;
