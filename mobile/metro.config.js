/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig} = require('metro-config');
const cp = require("child_process");

module.exports =
    (async () => {
        const {
            resolver: {sourceExts, assetExts},
        } = await getDefaultConfig();
        return {
            transformer: {
                babelTransformerPath: require.resolve('react-native-svg-transformer'),
            },
            resolver: {
                assetExts: assetExts.filter(ext => ext !== 'svg'),
                sourceExts: [...sourceExts, 'svg'],
            },
            serializer: {
                getModulesRunBeforeMainModule: () => {
                    const tsc = cp.spawnSync('npm.cmd', ['run', 'tsc'], {encoding: 'utf8'});
                    console.log(tsc.stdout);

                    if (tsc.stderr) {
                        throw new Error("TYPESCRIPT TYPING ERROR");
                    }
                    return [];
                }
            }
        };
    })();
