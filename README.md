This document is split into three main sections:
1. Required installation steps for basic usage of project SukApps
2. Additional installation steps to handling error in this react-native project
3. Tips and trick you can use to easily develop this project


# Requirements
Before start with this project, i hope you have finished step by step Installing dependencies for setup react-native project.
If you haven't then you can read the tutorial here
http://reactnative.dev/docs/getting-started

> **WARNING**: If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues.
---



# First, you must say "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" and pray to God so that there aren't many errors when you do this 😂😂 
 ---

# How to Install and Run the project
## Get the project
First, you must clone the project in your terminal
`git clone https://github.com/TIF17-Devteam/SukApps.git`

Go to the SukApps folder
`cd SukApps`and type `yarn install` wait till finished and then `npm install`

- Additional step for iOS
`cd ios` and `pod install` wait till finish ---


# Save the project to Github/Repository
Before upload your project to this repository, YOU MUST "PULL" BEFORE "PUSH" IT
1. Pull the project `git pull origin master` wait till complete, and then
2. Add all the changes with `git add .` and then MUST LEAVE COMMENT YOUR WORK BEFORE PUSH `git commit -m "YOUR ARE U DOING HERE` .
3. Push it `git push -u origin master`
4. Have done brohh 👍


## Run the project on Android
`npx react-native run-android`


## Run the project on iOS
Run the project on simulator
`npx react-native run-ios` or with specific iphone 8: `npx react-native run-ios --simulator="iPhone 8"`

Run the project on real devices
Before this one u may setting the xcode: http://reactnative.dev/docs/running-on-device and then
`npx react-native run-ios --device`



# Troubleshooting
## Build Failed on Android (Recommended)
If you don't make a big mistake just clean your android gradle
1. `cd android`
2. `./gradlew clean`
3. run your project again 😉😉

## Build Failed on iOS (Recommended)
If you don't make a big mistake just follow this step
1. open your Xcode and go to "Product" > "Clean build".

2. open terminal go to your `root` project and run `yarn install` wait till finished and then `npm install`
3. `cd ios` and `pod install` wait till finish
4. run your project again 😉😉



# Notice 👀
If you want to install some third-party library, i hope u contact the owner. And I'll find out whether the module is recommended or not.
So that it doesn't cause DEPRECATED on the program, or make the program CRASH

Thanks :)





---
#Nice work bro! you made it! 👍
---
