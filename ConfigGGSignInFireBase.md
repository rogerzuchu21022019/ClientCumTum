`1 ` Set up trên rnfirebase -> Authen -> Copy auth veef

`2 ` Set up trên firebase 
    ` 1 ` Android
    ` 2 ` IOS 
    ` 3 ` Down GoogleService
    ` 4 ` Add file đó vào trong XCode giống hình configure

`3 ` Enable GGSign in trong Project setting để lấy webClientID

`4 ` Vào mục ios -> pod install -> đợi coi nó báo là còn thiếu mấy cái như 

    ` 1 ` GoogleUtilities
    ` 2 ` FirebaseAuth
    ` 3 ` FirebaseAuth

`5 ` Bật ReactNative Debugger = cách :hermes_enabled => flags[:hermes_enabled] thành :hermes_enabled => true

`6 `