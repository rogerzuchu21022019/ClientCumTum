```
1 yarn add @react-native-google-signin/google-signin 
```

```
2 ios=> pod install
```

```
3 config project
Co 2 cach : 1 la su dung firebase
            2 la ko su dung firebase
            Su dung firebase thi can import firebase lib
            Khong su dung firebase thi vao trang google cloud => console => tao oauth
```

```
4 Config Android va lay clientID Android
package name in android la applicationID 
do phan search tim cho nhanh
```

```
5 get SHA1 key
cd android && ./gradlew signingReport
clientID android 589127740205-2j1br6as1qmc6f218kuv3dbcm14hd2in.apps.googleusercontent.com
```

```
6 Config IOS va lay clientID IOS
https://developers.google.com/identity/sign-in/ios/start-integrating?hl=vi#add_a_url_scheme_to_your_project
copy pod vào dưới dòng config = use_native_modules
```

```
7 Mở workspace lên => vào Project => Vô SignIng & Capabilities => Sửa lại bundleID cho app rồi copy nó vào để tạo clientID IOS
```
