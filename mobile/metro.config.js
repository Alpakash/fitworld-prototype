/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const cp = require("child_process");

module.exports = {
  serializer: {
    getModulesRunBeforeMainModule: () => {
      const tsc = cp.spawnSync('npm.cmd', ['run', 'tsc'], { encoding : 'utf8' });
      console.log(tsc.stdout);

      if (tsc.stderr) {
        throw new Error("TYPESCRIPT TYPING ERROR");
      }
      return [];
    }
  }
};
