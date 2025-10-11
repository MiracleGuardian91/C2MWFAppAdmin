const fs = require('fs');

(async () => {
  const { replaceInFile } = await import('replace-in-file');

  // Get the version from the version file
  const versionFilePath = '../ReleaseVersion/version.txt'; // <-- Update this path
  let releaseVersion = '';

  try {
    releaseVersion = fs.readFileSync(versionFilePath, 'utf8').trim(); // E.g. "v1.2.3"
  } catch (err) {
    console.error('Failed to read version file:', err);
    process.exit(1);
  }

  const dateObj = new Date();
  const year = dateObj.getFullYear().toString().substr(2);
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const HH = dateObj.getHours();

  let timeStamp = `${year}.${month}.${date}.${HH}`;
  timeStamp = `${releaseVersion} - ${timeStamp}`;

  const options = {
    files: [
      'src/environments/environment.ts',
      'src/environments/environment.prod.ts',
    ],
    from: /timeStamp: '(.*)'/g,
    to: "timeStamp: '" + timeStamp + "'",
    allowEmptyPaths: false,
  };

  const versionOption = {
    files: ["src/assets/version.txt"],
    from: /Version/g,
    to: timeStamp,
    allowEmptyPaths: false,
  };

  try {
    const changedFiles = await replaceInFile(options);
    const changeVersion = await replaceInFile(versionOption);

    if (changedFiles.length === 0 && changeVersion.length === 0) {
      throw new Error(
        "Please make sure that the file '" +
          options.files +
          "' has \"timeStamp: ''\""
      );
    }

    console.log('Build timestamp is set to: ' + timeStamp);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
})();
