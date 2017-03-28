BASEDIR=$(dirname "$0")

react-native bundle --platform android --dev false --entry-file ${BASEDIR}/index.android.js   --bundle-output ${BASEDIR}/android/app/src/main/assets/index.android.bundle   --assets-dest ${BASEDIR}/android/app/src/main/res

${BASEDIR}/android/gradlew assembleRelease
