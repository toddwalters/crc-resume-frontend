# resume-frontend


## Getting Started

## Web Application Expectations
The build process in CodeBuild attempts to run `npm install`, `npm test`, `npm lint`, and `npm build`. If there are any operations that need to occur to prepare your web application for deployment they need to be
triggered by the `build` script in your `package.json` file. CodeBuild will upload the files from the `./build/` directory.

## Directory Structure

```
.
├── buildspec.yml                     <-- CodeBuild file able to install and bundle your SPA
├── package-lock.json                 <-- Node dependencies file
├── package.json                      <-- Node dependencies file
├── params.dev.json                   <-- CloudFormation dev environment configuration
├── params.prod.json                  <-- CloudFormation prod environment configuration
├── params.qa.json                    <-- CloudFormation qa environment configuration
├── post-deploy-buildspec.yml         <-- CodeBuild file to check your code and upload it
├── public/                           <-- Directory containing resources that will be uploaded with your application
├── README.md                         <-- This instructions file
├── src/                              <-- Directory containing web application code
└── template.yml                      <-- Application deployment resources CloudFormation template
```
