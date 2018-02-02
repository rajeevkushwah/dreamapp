// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// config: {
// "APP_NAME": "Hotel Life",
//   "BASE_URL": "http://localhost:4000/",
//   "API_URL": "http://localhost:4000/api/v1/" 4108

// }

export const environment = {
  production: false,
  envName: "devLocal",
  config: {
	  APP_NAME: "Hotel Life",
    SOCKET_URL: "http://52.34.207.5:4122",
    BASE_URL: "http://52.34.207.5:4122/",
    API_URL: "http://52.34.207.5:4122/api/v1/",
    uploadPath: "http://52.34.207.5:4122/uploadedFiles/"

  }
};
